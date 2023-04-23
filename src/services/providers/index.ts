import { RawResponse } from "@/entities/Response";
import { api } from "@/libs/axios";
import parseResponseData from "@/utils/parseResponseData";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import { keyGetProvider, keyListProvider } from "./keys";
import { AxiosError } from "axios";
import { Provider } from "@/entities/Provider/provider";

export const useListProvider = () => {
  return useQuery(keyListProvider(), () =>
    api.get<RawResponse<Provider[]>>(`/providers/`).then(parseResponseData)
  );
};

export const useGetProvider = (id: string) => {
  return useQuery(
    keyGetProvider(id),
    () =>
      api
        .get<RawResponse<Provider>>(`/providers/${id}`)
        .then(parseResponseData),
    {
      enabled: Boolean(id),
    }
  );
};

export const useCreateProvider = (
  options?: UseMutationOptions<Provider, AxiosError, Provider>
) => {
  // return useMutation<Provider, AxiosError, Provider>(
  //   (data) =>
  //     api
  //       .post<RawResponse<Provider>>(`/providers/`, data)
  //       .then(parseResponseData),
  //   options
  // );

  const create = async (data: Provider) => {
    const result = await api.post<RawResponse<Provider>>(`/providers/`, data);
    return parseResponseData(result);
  };

  return useMutation(create, options);
};

export const useUpdateProvider = (
  options?: UseMutationOptions<Provider, AxiosError, Provider>
) => {
  return useMutation<Provider, AxiosError, Provider>(
    (data) =>
      api
        .put<RawResponse<Provider>>(`/providers/${data._id}`, data)
        .then(parseResponseData),
    options
  );
};

export const useDeleteProvider = (
  options?: UseMutationOptions<
    Provider,
    AxiosError,
    // DeleteUserExchangeProps,
    Provider
  >
) => {
  return useMutation<Provider, AxiosError, Provider>(
    ({ _id }) =>
      api
        .delete<RawResponse<Provider>>(`/providers/${_id}`)
        .then(parseResponseData),
    options
  );
};
