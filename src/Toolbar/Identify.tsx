import { MapBrowserEvent } from "ol";
import Overlay from "ol/Overlay";
import Tile from "ol/Tile";
import { altKeyOnly } from "ol/events/condition";
import { Extent, getCenter } from "ol/extent";
import { GeoJSON } from "ol/format";
import { Point } from "ol/geom";
import { Layer } from "ol/layer";
import Heatmap from "ol/layer/Heatmap";
import { default as Vector, default as VectorLayer } from "ol/layer/Vector";
import { TileWMS } from "ol/source";
import VectorSource from "ol/source/Vector";
import { Stroke, Style } from "ol/style";
import { useEffect, useRef, useState } from "react";
import { AiOutlineZoomIn } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { fetchGis } from "../services/GISMAP/map";
import { useMapStore } from "../store/map-store";
import { eQuery } from "../utils/json-to-layers";

type LayerInfo = {
  props: Record<string, any>;
  paramsName: string;
  displayName: string;
};

const Identify = () => {
  const map = useMapStore.use.map();
  const container = useRef<HTMLDivElement>(null);
  const [overlay, setOverlay] = useState<Overlay>();
  const [layerDisplayName, setLayerDisplayName] = useState("");
  const [clickExtent, setClickExtent] = useState<Extent>();
  const featureLayerRef = useRef<any>();
  const [layerInfo, setLayerInfo] = useState<LayerInfo>();
  useEffect(() => {
    const overlayPopup = new Overlay({
      element: container.current as HTMLElement,
      autoPan: { animation: { duration: 250 } },
    });
    setOverlay(overlayPopup);
    map.addOverlay(overlayPopup);
    const singleClickListener = (evt: MapBrowserEvent<any>) => {
      if (altKeyOnly(evt)) {
        return;
      }
      const clickedLayers = map.getAllLayers().filter((layer) => {
        if (
          !layer.getVisible() ||
          !layer.getData ||
          [
            "Village",
            "Taluka",
            "District",
            "State",
            "Google",
            "India Tiles",
          ].includes(layer.get("name"))
        ) {
          return false;
        }
        const rgba = layer.getData(evt.pixel);
        if (
          !(rgba instanceof Uint8ClampedArray) ||
          Array.from(rgba).every((v) => v === 0)
        ) {
          return false;
        }
        return true;
      });
      const layer = clickedLayers[0];
      if (
        layer instanceof Tile ||
        layer instanceof Vector ||
        layer instanceof Heatmap ||
        layer instanceof Layer
      ) {
        const url = layer
          ?.getSource()
          ?.getFeatureInfoUrl(
            evt.coordinate,
            map.getView().getResolution(),
            "EPSG:3857",
            {
              INFO_FORMAT: "application/json",
            }
          );
        if (!url) {
          return;
        }
        eQuery(url)
          .then((it) => fetchGis(it))
          .then((response) => response.json() as any)
          .then((data) => {
            if (data.features.length === 0) {
              return;
            }
            const features = new GeoJSON().readFeatures(data);
            setClickExtent(features[0].getGeometry()?.getExtent());
            const properties = data.features[0].properties;
            const displayName = layer.get("name");
            const paramsName = (layer.getSource() as TileWMS).getParams()
              .LAYERS;

            setLayerInfo({
              props: {
                ...properties,
              },

              displayName,
              paramsName,
            });
            setLayerDisplayName(displayName);
            overlayPopup?.setPosition(evt.coordinate);
            const source = new VectorSource({ features });
            const featureLayer = new VectorLayer({
              source,
              style: new Style({
                stroke: new Stroke({ color: "#0BC5EA", width: 5 }),
              }),
            });
            if (featureLayerRef.current) {
              map.removeLayer(featureLayerRef.current);
            }
            featureLayerRef.current = featureLayer;
            map.addLayer(featureLayer);
          });
      }
    };

    map.on("singleclick", singleClickListener);

    return () => {
      map.un("singleclick", singleClickListener);
      map.removeOverlay(overlay!);
      map.removeLayer(featureLayerRef.current!);
    };
  }, [map]);

  const zoomToFeature = () => {
    const center = getCenter(clickExtent!);
    map.getView().fit(new Point(center), {
      size: map.getSize(),
      duration: 1000,
      maxZoom: 10,
    });
  };

  const toggleOverlayPosition = () => {
    container.current?.parentElement?.classList.toggle("pin-top-right");
  };

  const closeOverlay = () => {
    overlay?.setPosition(undefined);
    container.current?.parentElement?.classList.remove("pin-top-right");
    map.removeLayer(featureLayerRef.current!);
  };

  const Content = (
    <>
      <div className="body">
        {!!layerInfo?.props &&
          Object.entries(sanitizeProps(layerInfo?.props)).map(([key, val]) => (
            <div key={key} className="cell">
              <div className="key">{key}</div>
              <div className="val">{val}</div>
            </div>
          ))}
      </div>
    </>
  );

  return (
    <div ref={container} id="popup" className="identify-popup">
      <header className="d-flex align-items-center justify-content-between gap-2 p-2">
        <span color="black">{layerDisplayName}</span>
        <div className="d-flex align-items-center gap-2">
          <AiOutlineZoomIn size={22} role="button" onClick={zoomToFeature} />
          <IoClose
            className=""
            color="black"
            size={24}
            role="button"
            onClick={closeOverlay}
          />
        </div>
      </header>

      {Content}
    </div>
  );
};

const sanitizeProps = (properties: Record<string, any>) => {
  const props = { ...properties };
  delete props["minx"];
  delete props["miny"];
  delete props["maxx"];
  delete props["maxy"];
  delete props["wkt"];
  delete props["geom"];
  delete props["userid"];
  delete props["username"];
  delete props["action"];

  Object.keys(props).forEach((key) => {
    const val = props[key];
    const newKey = key.replaceAll("_", " ");
    const newVal =
      !val ||
      (typeof val === "string" && val.trim().length === 0) ||
      val == "null" ||
      val == "NULL"
        ? "-"
        : val;
    delete props[key];
    props[newKey] = new String(newVal);
  });

  return props;
};

export default Identify;
