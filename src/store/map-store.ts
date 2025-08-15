// @ts-nocheck

import Map from "ol/Map";
import { create } from "zustand";
import { createSelectors } from "./create-selectors";
import { Layer } from "ol/layer";
import { Coordinate } from "ol/coordinate";
import CropFilter from "ol-ext/filter/Crop";
import LayerGroup from "ol/layer/Group";
import BaseLayer from "ol/layer/Base";

interface MapState {
  map: Map;
  setMap: (map: Map) => void;

  drawnCoordinates: Coordinate[];
  setDrawnCoordinates: (coords: Coordinate[]) => void;

  selectedLayers: Array<Layer>;
  setSelectedLayers: (layers: Array<Layer>) => void;

  visibleLayers: Record<string, Layer>;
  setVisibleLayers: (visibleLayers: Record<string, Layer>) => void;

  areaOfIntersectLayers: Record<string, Layer>;
  setAreaOfIntersectLayers: (
    areaOfIntersectLayers: Record<string, Layer>
  ) => void;

  isAoIEnabled: boolean;
  setAoIEnabled: (isAoIEnabled: boolean) => void;

  searchResults: BaseLayer[];
  setSearchResults: (searchResults: BaseLayer[]) => void;

  openedGroup?: LayerGroup;
  setOpenedGroup: (openedGroup?: LayerGroup) => void;

  showLayersLegend: boolean;
  setShowLayersLegend: (show: boolean) => void;

  navigationCropFilter: CropFilter;
  setNavigationCropFilter: (filter: CropFilter) => void;

  isProduction: false | true;
  setIsProduction: (isProduction: boolean) => void;
}

const useMapStoreBase = create<MapState>()((set: any) => ({
  map: new Map(),
  setMap: (map: Map) => set({ map }),

  showLayersLegend: true,
  setShowLayersLegend: (showLayersLegend: any) => set({ showLayersLegend }),

  visibleLayers: {},
  setVisibleLayers: (visibleLayers: any) => set({ visibleLayers }),

  areaOfIntersectLayers: {},
  setAreaOfIntersectLayers: (areaOfIntersectLayers: any) =>
    set({ areaOfIntersectLayers }),

  isAoIEnabled: false,
  setAoIEnabled: (isAoIEnabled: any) => set({ isAoIEnabled }),

  openedGroup: undefined,
  setOpenedGroup: (openedGroup: any) => set({ openedGroup }),

  drawnCoordinates: [],
  setDrawnCoordinates: (drawnCoordinates: any) => set({ drawnCoordinates }),

  selectedLayers: [],
  setSelectedLayers: (selectedLayers: Array<Layer>) => set({ selectedLayers }),

  searchResults: [],
  setSearchResults: (searchResults: BaseLayer[]) => set({ searchResults }),

  navigationCropFilter: new CropFilter(),
  setNavigationCropFilter: (navigationCropFilter: CropFilter) =>
    set({ navigationCropFilter }),

  isProduction: false,
  setIsProduction: (isProduction: boolean) => set({ isProduction }),
}));

export const useMapStore = createSelectors(useMapStoreBase);
