import { QueryKey } from "@tanstack/react-query";

export const keyGetAddress = (id: number): QueryKey => [`address`, id];
export const keyGetAddressByCep = (cep: string): QueryKey => [`address`, cep];
