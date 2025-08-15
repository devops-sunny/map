import React from "react";
import ReactDOM from "react-dom/client";
import { BisagMAP } from "./index";
import layersJsonDefault from "./GisMap/layer-groups/layer.json";

let obj = {
API_URL: "http://localhost:4013/",
MAP_DATA: "http://localhost:4013/gis/wms",
isProduction: false,
layersJsonDefault: layersJsonDefault,
INDIA_CENTER_COORDS: [77.2154, 28.6285],
INITIAL_ZOOM: 13,
showLatLon: true,
freezeMap: false,
KEY: "",
URL: "<<URL>>/wms/{z}/{x}/{y}",
handleChildCallback: (data: string) => {
console.log("Data received from child:", data);
},
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BisagMAP obj={obj} />
  </React.StrictMode>
);
