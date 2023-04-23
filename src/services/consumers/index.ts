import { RawResponse } from "@/entities/Response";
import { api } from "@/libs/axios";
import parseResponseData from "@/utils/parseResponseData";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { ApiError } from "next/dist/server/api-utils";
import { keyGetConsumer, keyListConsumer } from "./keys";
import { Consumer } from "@/entities/Consumer/consumer";
import { AxiosError } from "axios";

export const useListConsumer = () => {
  return useQuery(keyListConsumer(), () =>
    api.get<RawResponse<Consumer[]>>(`/consumers/`).then(parseResponseData)
  );
};

export const useGetCostumer = (id: string) => {
  return useQuery(
    keyGetConsumer(id),
    () =>
      api
        .get<RawResponse<Consumer>>(`/consumers/${id}`)
        .then(parseResponseData),
    {
      enabled: Boolean(id),
    }
  );
};

export const useCreateConsumer = (
  options?: UseMutationOptions<Consumer, AxiosError, Consumer>
) => {
  // return useMutation<Consumer, AxiosError, Consumer>(
  //   (data) =>
  //     api
  //       .post<RawResponse<Consumer>>(`/consumers/`, data)
  //       .then(parseResponseData),
  //   options
  // );

  const create = async (data: Consumer) => {
    const result = await api.post<RawResponse<Consumer>>(`/consumers/`, data);
    return parseResponseData(result);
  };

  return useMutation(create, options);
};

export const useUpdateConsumer = (
  options?: UseMutationOptions<Consumer, AxiosError, Consumer>
) => {
  return useMutation<Consumer, AxiosError, Consumer>(
    (data) =>
      api
        .put<RawResponse<Consumer>>(`/consumers/${data._id}`, data)
        .then(parseResponseData),
    options
  );
};

export const useDeleteConsumer = (
  options?: UseMutationOptions<
    Consumer,
    AxiosError,
    // DeleteUserExchangeProps,
    Consumer
  >
) => {
  return useMutation<Consumer, AxiosError, Consumer>(
    ({ _id }) =>
      api
        .delete<RawResponse<Consumer>>(`/consumers/${_id}`)
        .then(parseResponseData),
    options
  );
};
