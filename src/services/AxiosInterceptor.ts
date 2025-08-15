import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { d, e } from "../_mock/crypto";
import { getFingerprint } from "../_mock/fingerprint";

let data = "stage"; // stage , production

let MAP_DATA: string = "";
let API_URL: string =
  data === "stage"
    ? "http://localhost:4013/"
    : "";
let isProduction: boolean = false;

if (data == "stage") {
  console.warn = function () {};
  API_URL = "http://localhost:4013/";
  isProduction = false;
  MAP_DATA = "http://localhost:4013/gis/wms";
}

if (data == "production") {
  console.error = function () {};
  console.log = function () {};
  console.warn = function () {};
  API_URL = "";
  isProduction = true;
  MAP_DATA = "";
}

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  headers: {
    "Content-Type": string;
    Accept?: string;
    "request-type"?: string;
    Authorization?: string;
    fp?: string;
    "allow-gis"?: string;
    "Access-Control-Allow-Origin"?:string
  };
}

const defaultOptions: CustomAxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    "allow-gis": "%?Y?_TYqc2QM7^p4t#>c",
    "Access-Control-Allow-Origin":"http://localhost:5173/"

  },
};

const axiosInstance: AxiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use(
  async (request: InternalAxiosRequestConfig) => {
    request.headers["request-type"] = "web";

    const token = localStorage.getItem("token");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    request.headers["fp"] = getFingerprint();

    if (
      request.data &&
      ["post", "put", "patch"].includes(request.method?.toLowerCase() || "")
    ) {
      const encrypted = await e(request.data);
      request.data = { data: encrypted };
    }

    return request;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  async (response: AxiosResponse) => {
    const decrypted: any = await d(response.data.message);
    const jsonData = JSON.parse(decrypted);
    return jsonData;
  },
  (error) => {
    console.error(
      "API Response Error:",
      error?.response?.data?.error,
      "Oops, the server encountered an error. Please try again later"
    );
    return Promise.reject(
      error?.response?.data?.error || error?.message || "Unknown error occurred"
    );
  }
);

export { API_URL, axiosInstance, isProduction, MAP_DATA };
