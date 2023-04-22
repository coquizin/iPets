import { AxiosResponse } from "axios";
import { RawResponse } from "@entities/Response";

export default function parseResponseData<T extends object>(
  response: AxiosResponse<RawResponse<T>> | AxiosResponse<T>
): T {
  // if (`ct` in response.data) {
  //   return response.data as T;
  // }

  if (typeof response.data === `object` && `data` in response.data) {
    return response.data.data;
  }

  return response.data;
}
