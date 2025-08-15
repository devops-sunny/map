// @ts-nocheck

import { Select } from "@chakra-ui/react";
import { Extent } from "ol/extent";
import { transformExtent } from "ol/proj";
import { Fill, Stroke, Style } from "ol/style";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useMapStore } from "../store/map-store";

const Navigation = () => {
  const map = useMapStore.use.map();
  const hasMounted = useRef<boolean>(false);
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [stateData, setStateData] = useState<any[]>([]);
  const [districtData, setDistrictData] = useState<any[]>([]);
  const [talukaData, setTalukaData] = useState<any[]>([]);
  const [villageData, setVillageData] = useState<any[]>([]);
  const [clippedBoundary, setClippedBoundary] = useState<any>();

  const handleStateChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const newState = evt.target.value;
    setState(newState);
    setDistrictData([]);
    setTalukaData([]);
    setVillageData([]);
    const s = stateData.find((x) => x.statecode == newState);
    zoomByExtent([s.minx, s.miny, s.maxx, s.maxy]);
  };

  const handleDistrictChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const newDistrict = evt.target.value;
    setDistrict(newDistrict);
    setTalukaData([]);
    setVillageData([]);
    const s = districtData.find((x) => x.districtcode == newDistrict);
    zoomByExtent([s.minx, s.miny, s.maxx, s.maxy]);
  };

  const handleTalukaChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const newTaluka = evt.target.value;
    setTaluka(newTaluka);
    setVillageData([]);
    const s = talukaData.find((x) => x.talukacode == newTaluka);
    zoomByExtent([s.minx, s.miny, s.maxx, s.maxy]);
  };

  const handleVillageChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const newVillage = evt.target.value;
    const s = villageData.find((x) => x.villagecode == newVillage);
    zoomByExtent([s.minx, s.miny, s.maxx, s.maxy]);
  };

  const zoomByExtent = (extent4326: Extent) => {
    const extent3857 = transformExtent(extent4326, "EPSG:4326", "EPSG:3857");
    map.getView().fit(extent3857, { duration: 200 });
  };

  useEffect(() => {
    if (hasMounted.current) {
      return;
    }
    hasMounted.current = true;
  }, []);

  useEffect(() => {}, [state]);

  return (
    <div className="px-1 py-2 d-flex flex-column gap-3">
      <Select
        borderColor="blue.900"
        aria-label="Select state"
        onChange={handleStateChange}
        disabled={stateData?.length === 0}
      >
        <option value={""}>Select State</option>
        {stateData.map((ele: any, i: any) => {
          return (
            <option key={i} value={ele.statecode}>
              {ele.statename}
            </option>
          );
        })}
      </Select>

      <Select
        borderColor="blue.900"
        aria-label="Select district"
        onChange={handleDistrictChange}
        disabled={districtData?.length === 0}
      >
        <option value={""}>Select District</option>
        {districtData.length &&
          districtData.map((ele: any, i: any) => {
            return (
              <option key={i} value={ele.districtcode}>
                {ele.districtname}
              </option>
            );
          })}
      </Select>

      <Select
        borderColor="blue.900"
        aria-label="Select taluka"
        onChange={handleTalukaChange}
        disabled={talukaData?.length === 0}
      >
        <option value={""}>Select Taluka</option>
        {talukaData.length &&
          talukaData.map((ele: any, i: any) => {
            return (
              <option key={i} value={ele.talukacode}>
                {ele.talukaname}
              </option>
            );
          })}
      </Select>

      <Select
        borderColor="blue.900"
        aria-label="Select village"
        onChange={handleVillageChange}
        disabled={villageData?.length === 0}
      >
        <option value={""}>Select Village</option>
        {villageData.length &&
          villageData.map((ele: any, i: any) => {
            return (
              <option key={i} value={ele.villagecode}>
                {ele.villageName}
              </option>
            );
          })}
      </Select>
    </div>
  );
};

const SKIP_CLIP_LAYERS = new Set(["Google"]);

export const POLYGON_BOUNDARY_STYLE = new Style({
  fill: new Fill({ color: "rgba(255, 255, 255, 0.0)" }),
  stroke: new Stroke({ color: "#0000ff", width: 4 }),
});

interface LayerJsonBody {
  table: string;
  column: string;
  id: string;
}

export default Navigation;
