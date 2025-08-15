// @ts-nocheck

import { useMapStore } from "../store/map-store";
import { LAYERS_VISIBLE_BY_DEFAULT } from "../utils/constants";
import { indiaExtent3857 } from "../utils/ol";
import { Map } from "ol";

interface ResetMapOptions {
  map: Map;
  layers?: string[];
  shouldResetZoom?: boolean;
  resetSidebarLayers?: boolean;
}

const resetMap = ({
  map,
  layers,
  shouldResetZoom = false,
  resetSidebarLayers = false,
}: ResetMapOptions) => {
  document
    .querySelectorAll(".ol-tooltip-static")
    .forEach((tooltip) => tooltip.parentNode?.removeChild(tooltip));

  useMapStore.getState().setDrawnCoordinates([]);

  const navigationCropFilter = useMapStore.getState().navigationCropFilter;

  const removeSet = new Set(layers);

  map.getAllLayers().forEach((layer) => {
    if (removeSet.has(layer.get("name"))) {
      map.removeLayer(layer);
    } else if (resetSidebarLayers) {
      layer.setVisible(LAYERS_VISIBLE_BY_DEFAULT.has(layer.get("name")));
    }
    (layer as any).removeFilter(navigationCropFilter);
  });

  if (shouldResetZoom) {
    map.getView().fit(indiaExtent3857, { duration: 500 });
  }
};

export default resetMap;
