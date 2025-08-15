
import { ImageTile, Tile } from "ol";
import { fetchGis } from "../services/GISMAP/map";
import { e } from "../utils/crypto";

export interface Layer {
  id: string;
  type: "layer";
  label: string;
  url: string;
  paramLayers: string;
  styles?: string;
  cql?: string;
  visible: boolean;
  maxResolution?: number;
}
export interface LayerGroup {
  id: string;
  type: "group";
  label: string;
  children: LayerUnit[];
}
export type LayerUnit = Layer | LayerGroup;

const BISAG_WMS_URLS = ["localwms", "wms"];

export const tileLoader = async (imageTile: Tile, src: string) => {
  if (imageTile instanceof ImageTile) {
    const res = await fetchGis(await eQuery(src));
    if (res.status !== 200) {
      return;
    }
    const blob = await res.blob();
    const imageElement = imageTile.getImage();
    if (imageElement instanceof HTMLImageElement) {
      const imageUrl = URL.createObjectURL(blob);
      imageElement.onload = () => {
        URL.revokeObjectURL(imageUrl);
      };
      imageElement.src = imageUrl;
    }
  }
};

export const isBisagWmsUrl = (url: string) =>
  BISAG_WMS_URLS.some((it) => url.includes(it));

export const eQuery = async (url: string) => {
  if (!isBisagWmsUrl(url)) {
    return url;
  }
  const uri = new URL(url);
  const baseUrl = uri.origin + uri.pathname;
  const queryString = uri.search.substring(1);
  return `${baseUrl}?data=${encodeURIComponent(await e(queryString))}`;
};
