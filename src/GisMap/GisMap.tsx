// @ts-nocheck

import { Feature, MapBrowserEvent } from "ol";
import ScaleLine from "ol-ext/control/CanvasScaleLine";
import Compass from "ol-ext/control/Compass";
import ProgressBar from "ol-ext/control/ProgressBar";
import Scale from "ol-ext/control/Scale";
import "ol-ext/dist/ol-ext.css";
import ZoomAnimation from "ol-ext/featureanimation/Zoom";
import AnimatedCluster from "ol-ext/layer/AnimatedCluster";
import { FeatureLike } from "ol/Feature";
import Map from "ol/Map";
import View from "ol/View";
import { defaults as defaultControls } from "ol/control";
import { easeOut, upAndDown } from "ol/easing";
import { Point } from "ol/geom";
import { defaults as defaultInteractions } from "ol/interaction";
import BaseLayer from "ol/layer/Base";
import "ol/ol.css";
import { fromLonLat, transform } from "ol/proj";
import { Cluster } from "ol/source";
import VectorSource from "ol/source/Vector";
import { Circle, Fill, Stroke, Style, Text } from "ol/style";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import scss from "./GisMap.module.scss";
import olOverrideScss from "./OlOverrides.module.scss";

import { Group, Tile as TileLayer } from "ol/layer";
import { TileWMS } from "ol/source";

import { Tile } from "ol/layer";
import { BingMaps, XYZ } from "ol/source";
import Identify from "../Toolbar/Identify";
import { getClusterCount, GetSDTV } from "../services/GISMAP/map";
import { useMapStore } from "../store/map-store";
import {
  tileLoader,
  LayerGroup as TypeLayerGroup,
} from "../utils/json-to-layers";
import { clsx } from "../utils/string";
import LatLon from "./LatLon";
import LayersLegend from "./LayersLegend";

interface GisMapProps {
  showLatLon?: boolean;
  freezeMap?: boolean;
  INDIA_CENTER_COORDS?: number[];
  INITIAL_ZOOM?: number;
  KEY?: string;
  URL?: string;
  callbackify?: (data: string) => void;
  layersJson?: TypeLayerGroup;
  API_URL?: string;
  MAP_DATA?: string;
  isProduction?: boolean;
}

const GisMap: React.FC<GisMapProps> = ({
  showLatLon = true,
  freezeMap = false,
  INDIA_CENTER_COORDS,
  INITIAL_ZOOM,
  KEY,
  URL,
  callbackify,
  layersJson,
  API_URL,
  MAP_DATA,
  isProduction,
}) => {
  const highResolutionImageSubGroup = new Group({
    layers: [
      new Tile({
        visible: false,
        preload: Infinity,
        opacity: 1,
        source: new BingMaps({
          key: KEY,
          imagerySet: "Aerial",
        }),
        properties: { name: "Aerial" },
      }),

      new Tile({
        visible: false,
        source: new XYZ({
          url: "http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
        }),
        properties: { name: "High Resolution" },
      }),

      new Tile({
        source: new XYZ({
          url: URL,
        }),
        visible: false,
        properties: { name: "India Tiles" },
      }),
    ],
    properties: { name: "High Resolution Image" },
  });

  const highResImagesGroup = new Group({
    properties: { name: "High-Res Images" },
    layers: [highResolutionImageSubGroup],
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);
  const setMap = useMapStore.use.setMap();
  const mapExist = useMapStore.use.map();
  const [groups, setGroups] = useState<BaseLayer[]>([highResImagesGroup]);
  const selectedLayers = useMapStore.use.selectedLayers();
  const [cluster, setCluster] = useState<BaseLayer>();
  const [summary, setSummary] = useState<any[]>([]);

  const createPulseFeature = (coordinate: number[]) => {
    const feature = new Feature(new Point(coordinate));
    feature.setStyle(
      new Style({
        image: new Circle({
          radius: 30,
          stroke: new Stroke({ color: "green", width: 2 }),
        }),
      })
    );
    return feature;
  };

  const handlePulseAnimation = useCallback(
    (evt: MapBrowserEvent<UIEvent>, map: Map) => {
      const feature = createPulseFeature(evt.coordinate);
      (map as any).animateFeature(
        feature,
        new ZoomAnimation({
          fade: easeOut,
          duration: 2800,
          easing: upAndDown,
        })
      );
    },
    []
  );

  const village_clickEvent = useCallback(
    (evt: MapBrowserEvent<UIEvent>) => {
      const [longitude, latitude] = transform(
        evt.coordinate,
        "EPSG:3857",
        "EPSG:4326"
      );
      const wktPoint = `POINT (${longitude} ${latitude})`;

      GetSDTV(API_URL, { id: wktPoint })
        .then((response: any[]) => {
          if (response?.[0]) {
            console.log("hi");
            callbackify(response);
          } else {
            toast.warn("No data found for the selected point.");
          }
        })
        .catch((error: any) => {
          toast.error(error);
        })
        .finally(() => {
          if (mapExist) {
            mapExist.un("singleclick", village_clickEvent);
          }
        });
    },
    [mapExist]
  );

  const makeOlObject = (obj: LayerUnit): BaseLayer => {
    if (obj.type === "layer") {
      return new TileLayer({
        source: new TileWMS({
          crossOrigin: "anonymous",
          url: MAP_DATA as any,
          tileLoadFunction: tileLoader,
          params: {
            version: "1.3.0",
            TILED: true,
            LAYERS: obj.paramLayers,
            STYLES: obj.styles || "",
            CQL_FILTER: obj.cql,
          },
        }),
        properties: { id: obj.id, name: obj.label },
        visible: obj.visible,
        maxResolution: obj.maxResolution,
      });
    }
    const children = obj.children.map(makeOlObject);
    const group = new Group({
      properties: { id: obj.id, name: obj.label },
      layers: children,
    });
    return group;
  };

  useEffect(() => {
    if (hasMounted.current) return;

    hasMounted.current = true;
    setGroups((prev) => [
      ...prev,
      ...(layersJson as TypeLayerGroup).children.map(makeOlObject),
    ]);
  }, []);

  const getCountForCluster = useCallback(() => {
    getClusterCount(API_URL, {})
      .then((response: any[]) => {
        setSummary(response);
      })
      .catch((error: any) => {
        toast.error(error);
      });
  }, []);

  const isBirthCertificateLayerVisible = useCallback(() => {
    if (!mapExist) return false;

    const birthLayer = mapExist
      .getAllLayers()
      .find((layer) => layer.get("name") === "Hospital Birth");

    return birthLayer?.isVisible() || false;
  }, [mapExist]);

  useEffect(() => {
    if (!mapExist) return;

    const isVisible = isBirthCertificateLayerVisible();

    if (isVisible) {
      getCountForCluster();
    } else {
      setSummary([]);
    }
  }, [
    mapExist,
    getCountForCluster,
    selectedLayers,
    isBirthCertificateLayerVisible,
  ]);

  useEffect(() => {
    if (!mapRef.current) return;

    const controls = [
      new Scale(),
      new ScaleLine(),
      new Compass({
        className: "bottom",
        src: "compact",
        style: new Stroke({ color: "#75869d", width: 0 }),
      }),
    ];

    const map = new Map({
      target: mapRef.current,
      layers: groups,
      view: new View({
        center: fromLonLat(INDIA_CENTER_COORDS),
        zoom: INITIAL_ZOOM,
      }),
      controls: freezeMap ? [] : [...defaultControls().getArray(), ...controls],
      interactions: freezeMap ? [] : defaultInteractions(),
    });

    const progressBar = new ProgressBar({ layers: map.getAllLayers() });
    map.addControl(progressBar);

    const boundHandlePulseAnimation = (evt: MapBrowserEvent<UIEvent>) =>
      handlePulseAnimation(evt, map);
    map.on("singleclick", boundHandlePulseAnimation);

    setMap(map);

    return () => {
      controls.forEach((control) => map.removeControl(control));
      map.un("singleclick", boundHandlePulseAnimation);
      map.dispose();
      map.setTarget(undefined);
    };
  }, [groups, freezeMap, handlePulseAnimation, setMap]);

  useEffect(() => {
    if (!mapExist) return;

    const existingClusterLayer = mapExist
      .getAllLayers()
      .find((layer) => layer.get("name") === "cluster-layer");

    if (existingClusterLayer) {
      mapExist.removeLayer(existingClusterLayer);
    }

    if (cluster && isBirthCertificateLayerVisible()) {
      mapExist.addLayer(cluster);
    }
  }, [cluster, mapExist, isBirthCertificateLayerVisible]);

  useEffect(() => {
    if (!Array.isArray(summary) || summary.length < 1) {
      setCluster(undefined);
      return;
    }

    if (summary?.length > 0) {
      const count = summary.length;
      const features = new Array(count);

      for (let i = 0; i < count; ++i) {
        const coordinates = [
          parseFloat(summary[i].lon),
          parseFloat(summary[i].lat),
        ];
        features[i] = new Feature(
          new Point(transform(coordinates, "EPSG:4326", "EPSG:3857"))
        );
        features[i].set("count", summary[i].count);
      }

      const vectorSource = new VectorSource({ features: features });
      const clusterSource = new Cluster({
        distance: 40,
        source: vectorSource,
      });

      const clusterLayer = new AnimatedCluster({
        source: clusterSource,
        animationDuration: 700,
        style: makeStyle,
        properties: { name: "cluster-layer" },
      });

      setCluster(clusterLayer);
    }
  }, [summary]);

  let styleCache: Record<string, Style> = {};

  function makeStyle(feature: FeatureLike, resolution: number) {
    const features = feature.get("features")?.[0]?.get("count");
    const size = features;
    let style = styleCache[size];

    if (size) {
      const color = size > 25 ? "192,0,0" : size > 8 ? "255,128,0" : "0,128,0";
      const radius = Math.max(8, Math.min(size * 0.75, 20));
      const lineDash = new Array(7).fill((2 * Math.PI * radius) / 6);
      lineDash[0] = 0;

      style = styleCache[size] = new Style({
        image: new Circle({
          radius: radius,
          stroke: new Stroke({
            color: "rgba(" + color + ",0.5)",
            width: 15,
            lineDash,
            lineCap: "butt",
          }),
          fill: new Fill({ color: "rgba(" + color + ",1)" }),
        }),
        text: new Text({
          text: size.toString(),
          fill: new Fill({ color: "#fff" }),
        }),
      });
    }

    return style;
  }

  return (
    <>
      <div
        id="map"
        ref={mapRef}
        className={clsx(scss["map"], olOverrideScss["map"])}
      />
      <LayersLegend />
      {showLatLon && <LatLon />}
      {false && (
        <>
          <button
            onClick={() => mapExist?.on("singleclick", village_clickEvent)}
            className="draw-button btn btn-primary"
          >
            Add Point
          </button>
        </>
      )}
      <Identify />
    </>
  );
};

export default GisMap;
