import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GisMap from "./GisMap/GisMap";
import LayerMapSidebar from "./LayersSidebar";

const BisagMAP: React.FC<any> = ({ obj }) => {
  useEffect(() => {
    localStorage.setItem(
      "isProduction",
      obj?.isProduction as unknown as any
    );
  }, [obj?.isProduction]);

  return (
    <>
      <GisMap
        showLatLon={obj?.showLatLon}
        freezeMap={obj?.freezeMap}
        INDIA_CENTER_COORDS={obj?.INDIA_CENTER_COORDS}
        INITIAL_ZOOM={obj?.INITIAL_ZOOM}
        KEY={obj?.KEY}
        URL={obj?.URL}
        callbackify={obj?.handleChildCallback}
        layersJson={obj.layersJsonDefault as any}
        API_URL={obj?.API_URL}
        MAP_DATA={obj?.MAP_DATA}
        isProduction={obj?.isProduction}
      />
      <LayerMapSidebar />
      <ToastContainer />
    </>
  );
};

export default BisagMAP;
