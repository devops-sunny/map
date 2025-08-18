
```
import React from "react";
import { BisagMAP } from "bisag-map-geospatial"; 
import "bisag-map-geospatial/dist/style.css"; 

export default function App() {
  const obj = {
    API_URL: "http://localhost:4013/",
    MAP_DATA: "http://localhost:4013/gis/wms",
    isProduction: false,
    layersJsonDefault: {}, // Your layer config
    INDIA_CENTER_COORDS: [77.2154, 28.6285],
    INITIAL_ZOOM: 13,
    showLatLon: true,
    freezeMap: false,
    KEY: "",
    URL: "<<URL>>/wms/{z}/{x}/{y}",
    handleChildCallback: (data) => {
      console.log("Data received from child:", data);
    },
  };

  return (
    <div style={{ height: "100vh" }}>
      <BisagMAP obj={obj} />
    </div>
  );
}

```