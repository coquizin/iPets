import {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  AxiosInstance,
} from "axios";
import { toaster } from "evergreen-ui";
import { CookieKey, readCookie, removeCookie } from "@global-utils/cookies";

const onResponse = (response: AxiosResponse) => response;
const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (
    window.location.pathname !== `/login` &&
    window.location.pathname !== `/criar-conta`
  ) {
    if ([401].includes(error.response?.status ?? 0)) {
      removeCookie(CookieKey.JwtAuthToken);
      removeCookie(CookieKey.UserId);
      window.location.href = `/login`;
    }
  }
  if ([403].includes(error.response?.status ?? 0)) {
    toaster.danger(`Você não tem permissão para acessar essa página.`);
  }

  return Promise.reject(error);
};

const onRequest = async (config: AxiosRequestConfig) => {
  const { headers = {} } = config;
  headers[`X-iPets`] = `Website`;

  if (typeof document !== `undefined`) {
    const token = readCookie(CookieKey.JwtAuthToken, document.cookie);

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  return { ...config, headers };
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
};
