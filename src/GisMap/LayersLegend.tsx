// @ts-nocheck

import scss from "./GisMap.module.scss";
import { useMapStore } from "../store/map-store";
import { clsx } from "../utils/string";
import { TileWMS } from "ol/source";
import { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { fetchGis } from "../services/GISMAP/map";
import { eQuery } from "../utils/json-to-layers";

const LayersLegend = () => {
  const map = useMapStore.use.map();
  const [legendUrls, setLegendUrls] = useState<string[]>([]);
  const setSelectedLayers = useMapStore.use.setSelectedLayers();

  useEffect(() => {
    setSelectedLayers(map.getAllLayers().filter((layer) => layer.getVisible()));
  }, [map]);

  const selectedLayers = useMapStore.use.selectedLayers();

  useEffect(() => {
    Promise.all(
      selectedLayers
        .filter((layer) => layer.getSource() instanceof TileWMS)
        .map(async (layer) => {
          const source = layer.getSource() as TileWMS;
          const sourceUrl = source.getUrls()?.[0];
          const LAYERS = source.getParams().LAYERS;
          const res = await fetchGis( 
            await eQuery(makeLegendUrl(sourceUrl!, LAYERS))
          );
          const blob = await res.blob();
          return URL.createObjectURL(blob);
        })
    ).then((legendUrls) => setLegendUrls(legendUrls));
  }, [selectedLayers]);

  if (!selectedLayers || selectedLayers.length === 0) {
    return null;
  }

  return (
    <ul
      className={clsx(
        scss["layersLegend"],
        "list-unstyled mb-0 rounded p-2 bg-white"
      )}
      style={{ backgroundColor: "rgb(255, 255, 255)", marginBottom: "80px" }}
    >
      <small className="d-flex align-items-center mb-1">
        <FaList size={5} /> <span className="ms-1">Layers Legend</span>
      </small>
      {legendUrls &&
        legendUrls.length > 0 &&
        legendUrls
          .filter((_, index) => !!selectedLayers[index])
          .map((url, index) => (
            <li key={selectedLayers[index].get("id")}>
              <img src={url} />
            </li>
          ))}
    </ul>
  );
};

const makeLegendUrl = (sourceUrl: string, layerName: string) =>
  `${sourceUrl}?REQUEST=GetLegendGraphic&sld_version=1.0.0&layer=${layerName}&format=image/png&transparent=true&legend_options=fontSize:11;fontName:sans-serif;fontAntiAliasing:true;forceLabels:on;dpi:116&WIDTH=12&HEIGHT=12&Scale=1`;

export default LayersLegend;
