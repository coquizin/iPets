import { Cep } from "@/entities/Cep";
import { RawResponse } from "@/entities/Response";
import { apiCEP } from "@/libs/axios";
import parseResponseData from "@/utils/parseResponseData";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { ApiError } from "next/dist/server/api-utils";
import { keyGetAddressByCep } from "./keys";

export const useGetAddressByCep = (
  cep: string,
  options?: UseQueryOptions<Cep, ApiError, Cep>
) => {
  return useQuery(
    keyGetAddressByCep(cep),
    () => apiCEP.get<RawResponse<Cep>>(`/${cep}/json/`).then(parseResponseData),
    options
  );
};
