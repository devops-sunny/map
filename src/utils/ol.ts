import { Extent } from "ol/extent";
import { transformExtent } from "ol/proj";

import BaseLayer from "ol/layer/Base";
import LayerGroup from "ol/layer/Group";

export const indiaExtent4326: Extent = [68.11, 6.4, 96.41, 37.5];
export const indiaExtent3857 = transformExtent(
  indiaExtent4326,
  "EPSG:4326",
  "EPSG:3857"
);

export const isLayerGroup = (layer: BaseLayer): layer is LayerGroup =>
  layer instanceof LayerGroup;
