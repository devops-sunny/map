// @ts-nocheck

import { Map } from "ol";

export const zoomIn = (map: Map) => {
  map.getView().setZoom((map.getView().getZoom() ?? 0) + 1);
};

export const zoomOut = (map: Map) => {
  map.getView().setZoom((map.getView().getZoom() ?? 1) - 1);
};

export const fullScreen = () => {
  const elem = document.getElementById("map");
  if (elem?.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem?.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem?.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem?.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
};
