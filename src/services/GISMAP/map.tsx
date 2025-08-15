import ky from "ky";
import { getFingerprint } from "../../_mock/fingerprint";
import { API_URL, axiosInstance, isProduction } from "../AxiosInterceptor";
import { AxiosResponse } from "axios";
import { useMapStore } from "../../store/map-store";

const postURL = `${API_URL}`;

interface Geometry {
  type: string;
  coordinates: number[] | number[][];
}

interface Feature {
  type: string;
  geometry: Geometry;
  properties: any;
}
export const getFeturesUsingOWS = async (
  geoserverXML: string,
  type: string
): Promise<Feature[] | any[]> => {
  const combinedFiltersXML2 = `
      <GetFeature xmlns="http://www.opengis.net/wfs" service="WFS" version="1.1.0" xmlns:cite="http://www.opengeospatial.net/cite" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">
          ${geoserverXML}
      </GetFeature>
  `;

  try {
    const response = await axiosInstance.post<any>(
      `${postURL}creategeoheritage/get-ows-Data-from-Geoserver`,
      { id: combinedFiltersXML2.toString() }
    );

    const jsondata = JSON.parse(response.data);

    if (type === "feature") {
      return jsondata.features;
    } else if (type === "properties") {
      const propertiesArray = jsondata.features
        .map((feature: Feature) => feature.properties)
        .filter(Boolean);

      return propertiesArray;
    } else {
      return [];
    }
  } catch (error) {
    const response = await axiosInstance.post<any>(
      `${postURL}public/get-ows-Data-from-Geoserver`,
      { id: combinedFiltersXML2.toString() }
    );

    const jsondata = JSON.parse(response.data);
    if (type === "feature") {
      return jsondata.features;
    } else if (type === "properties") {
      const propertiesArray = jsondata.features
        .map((feature: Feature) => feature.properties)
        .filter(Boolean);

      return propertiesArray;
    } else {
      return [];
    }
  }
};

export const getFeturesUsingQuery = async (
  layername: any,
  cql: any,
  type: any
): Promise<Feature[] | any[]> => {
  try {
    const response = await axiosInstance.post<any>(
      `${postURL}creategeoheritage/get-data-from-query`,
      { id: { cql: cql, layername: layername } }
    );

    const jsondata = response.data;
    if (type === "feature" || type === "features") {
      return jsondata.features;
    } else if (type === "properties") {
      const propertiesArray = jsondata.features
        .map((feature: Feature) => feature.properties)
        .filter(Boolean);

      return propertiesArray;
    } else if (type === "propertiesWithoutFeature") {
      return jsondata;
    } else {
      return [];
    }
  } catch (error) {
    const response = await axiosInstance.post<any>(
      `${postURL}public/get-data-from-query`,
      { id: { cql: cql, layername: layername } }
    );

    const jsondata = response.data;
    if (type === "feature" || type === "features") {
      return jsondata.features;
    } else if (type === "properties") {
      const propertiesArray = jsondata.features
        .map((feature: Feature) => feature.properties)
        .filter(Boolean);

      return propertiesArray;
    } else if (type === "propertiesWithoutFeature") {
      return jsondata;
    } else {
      return [];
    }
  }
};

export const gisHeaders = async () => {
  const token = localStorage.getItem("token");
  const isProduction = localStorage.getItem("isProduction");

  let object: { fp: string; Authorization?: string; "allow-gis"?: string } = {
    fp: getFingerprint(),
  };
  if (isProduction) {
    object = {
      ...object,
      Authorization: `Bearer ${token || ""}`,
    };
  }

  if (!isProduction) {
    object = {
      ...object,
      "allow-gis": "%?Y?_TYqc2QM7^p4t#>c",
    };
  }

  return object;
};

export const fetchGis = async (
  url: string,
  kyOptions?: Parameters<typeof ky>[1]
) => ky.get(url, { headers: await gisHeaders() });

export const mapTable = (url: string, data: any): Promise<any> => {
  return axiosInstance.post<any>(`${postURL}${url}`, data);
};

export const GetBoundry = (data: any): Promise<AxiosResponse<any>> => {
  return axiosInstance.post<any>(`${postURL}/navigation/get-boundary`, data);
};

export const GetState = (data: any): any => {
  return axiosInstance.post<any>(
    `${postURL}master/getUnitSubUsageTypeList`,
    data
  );
};

export const GetSDTV = (postURL: any, data: any): any => {
  return axiosInstance.post<any>(`${postURL}gis/intersected-sdtv`, data);
};
export const getClusterCount = (postURL: any, data: any): any => {
  return axiosInstance.post<any>(
    `${postURL}birthRegi/getBirthCountForCluster`,
    data
  );
};
