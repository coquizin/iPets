import { RawResponse } from "@/entities/Response";
import { api } from "@/libs/axios";
import parseResponseData from "@/utils/parseResponseData";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import { keyGetRequest, keyListRequest } from "./keys";
import { AxiosError } from "axios";
import { RequestModel } from "@/entities/Requests";

export const useListRequest = () => {
  return useQuery(keyListRequest(), () =>
    api.get<RawResponse<RequestModel[]>>(`/requests/`).then(parseResponseData)
  );
};

export const useGetRequest = (id: string) => {
  return useQuery(
    keyGetRequest(id),
    () =>
      api
        .get<RawResponse<RequestModel>>(`/requests/${id}`)
        .then(parseResponseData),
    {
      enabled: Boolean(id),
    }
  );
};

export const useCreateRequest = (
  options?: UseMutationOptions<RequestModel, AxiosError, RequestModel>
) => {
  return useMutation<RequestModel, AxiosError, RequestModel>(
    (data) =>
      api
        .post<RawResponse<RequestModel>>(`/requests/`, data)
        .then(parseResponseData),
    options
  );
};

export const useUpdateRequest = (
  options?: UseMutationOptions<RequestModel, AxiosError, RequestModel>
) => {
  return useMutation<RequestModel, AxiosError, RequestModel>(
    (data) =>
      api
        .put<RawResponse<RequestModel>>(`/requests/${data._id}`, data)
        .then(parseResponseData),
    options
  );
};

export const useDeleteRequest = (
  options?: UseMutationOptions<
    RequestModel,
    AxiosError,
    // DeleteUserExchangeProps,
    RequestModel
  >
) => {
  return useMutation<RequestModel, AxiosError, RequestModel>(
    ({ _id }) =>
      api
        .delete<RawResponse<RequestModel>>(`/requests/${_id}`)
        .then(parseResponseData),
    options
  );
};
