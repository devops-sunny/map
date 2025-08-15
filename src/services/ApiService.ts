import { AxiosResponse } from "axios";
import { axiosInstance } from "./AxiosInterceptor";
import { d, e } from "../_mock/crypto";

interface ApiOptions {
  showToast: boolean;
  successToast: string;
  errorToast: string;
}

interface ApiService {
  get: <T>(
    url: string,
    options?: Partial<ApiOptions>
  ) => Promise<AxiosResponse<T>>;
  post: <T>(
    url: string,
    payload: unknown,
    options?: Partial<ApiOptions>
  ) => Promise<AxiosResponse<T>>;
  put: <T>(
    url: string,
    payload: unknown,
    options?: Partial<ApiOptions>
  ) => Promise<AxiosResponse<T>>;
  Delete: <T>(
    url: string,
    payload?: unknown,
    options?: Partial<ApiOptions>
  ) => Promise<AxiosResponse<T>>;
  showLoader: () => void;
  hideLoader: () => void;
}

const defaultOptions: ApiOptions = {
  showToast: false,
  successToast: "Record has been saved successfully",
  errorToast: "Something Went Wrong",
};

localStorage.setItem("apiCount", "0");

const get = <T>(
  url: string,
  options: Partial<ApiOptions> = defaultOptions
): Promise<AxiosResponse<T>> => {
  const mergedOptions: ApiOptions = { ...defaultOptions, ...options };
  let apiCount: number = parseInt(localStorage.getItem("apiCount") || "0", 10);
  showLoader();
  localStorage.setItem("apiCount", String(apiCount ? apiCount + 1 : 1));

  return axiosInstance
    .get<T>(url)
    .then(async (res: AxiosResponse<T>) => {
      const responseWithMessage = res as AxiosResponse<
        T & { message?: string }
      >;
      const encJsonString = ((res as any)?.message as string) || "";
      const decJsonString = await d(encJsonString!);
      const decJson = JSON.parse(decJsonString);
      return decJson;
    })
    .catch((err: Error) => {
      hideLoader();
      return Promise.reject(err);
    })
    .finally(() => {
      apiCount = parseInt(localStorage.getItem("apiCount") || "0", 10);
      apiCount -= 1;
      if (apiCount >= 0) {
        localStorage.setItem("apiCount", String(apiCount));
        if (apiCount === 0) {
          hideLoader();
        }
      }
    });
};

const post = async <T>(
  url: string,
  payload: unknown,
  options: Partial<ApiOptions> = defaultOptions
): Promise<AxiosResponse<T>> => {
  const mergedOptions: ApiOptions = { ...defaultOptions, ...options };
  let apiCount: number = parseInt(localStorage.getItem("apiCount") || "0", 10);
  showLoader();
  localStorage.setItem("apiCount", String(apiCount ? apiCount + 1 : 1));

  let postDataPayload = {
    data: await e(payload as object),
  };

  return axiosInstance
    .post<T>(url, postDataPayload)
    .then(async (res: AxiosResponse<T>) => {
      const responseWithMessage = res as AxiosResponse<
        T & { message?: string }
      >;
      const encJsonString = ((res as any)?.message as string) || "";
      const decJsonString = await d(encJsonString!);
      const decJson = JSON.parse(decJsonString);
      return decJson;
    })
    .catch((err: Error) => {
      hideLoader();

      return Promise.reject(err);
    })
    .finally(() => {
      apiCount = parseInt(localStorage.getItem("apiCount") || "0", 10);
      apiCount -= 1;
      if (apiCount >= 0) {
        localStorage.setItem("apiCount", String(apiCount));
        if (apiCount === 0) {
          hideLoader();
        }
      }
    });
};

const put = <T>(
  url: string,
  payload: unknown,
  options: Partial<ApiOptions> = defaultOptions
): Promise<AxiosResponse<T>> => {
  const mergedOptions: ApiOptions = { ...defaultOptions, ...options };
  let apiCount: number = parseInt(localStorage.getItem("apiCount") || "0", 10);
  showLoader();
  localStorage.setItem("apiCount", String(apiCount ? apiCount + 1 : 1));

  return axiosInstance
    .put<T>(url, payload)
    .then((res: AxiosResponse<T>) => {
      return res;
    })
    .catch((err: Error) => {
      hideLoader();

      return Promise.reject(err);
    })
    .finally(() => {
      apiCount = parseInt(localStorage.getItem("apiCount") || "0", 10);
      apiCount -= 1;
      if (apiCount >= 0) {
        localStorage.setItem("apiCount", String(apiCount));
        if (apiCount === 0) {
          hideLoader();
        }
      }
    });
};

const Delete = <T>(
  url: string,
  payload?: unknown,
  options: Partial<ApiOptions> = defaultOptions
): Promise<AxiosResponse<T>> => {
  const mergedOptions: ApiOptions = { ...defaultOptions, ...options };
  let apiCount: number = parseInt(localStorage.getItem("apiCount") || "0", 10);
  showLoader();
  localStorage.setItem("apiCount", String(apiCount ? apiCount + 1 : 1));

  return axiosInstance
    .delete<T>(url)
    .then((res: AxiosResponse<T>) => res)
    .catch((err: Error) => {
      hideLoader();

      return Promise.reject(err);
    })
    .finally(() => {
      apiCount = parseInt(localStorage.getItem("apiCount") || "0", 10);
      apiCount -= 1;
      if (apiCount >= 0) {
        localStorage.setItem("apiCount", String(apiCount));
        if (apiCount === 0) {
          hideLoader();
        }
      }
    });
};

const showLoader = (): void => {
  document.body.classList.add("loading-indicator");
};

const hideLoader = (): void => {
  setTimeout(() => {
    document.body.classList.remove("loading-indicator");
  }, 2000);
};

const ApiService: ApiService = {
  get,
  post,
  Delete,
  put,
  showLoader,
  hideLoader,
};

export default ApiService;
