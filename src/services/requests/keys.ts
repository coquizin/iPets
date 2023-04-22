import { QueryKey } from "@tanstack/react-query";

export const keyListRequest = (): QueryKey => [`requests`];
export const keyGetRequest = (id: number): QueryKey => [`request`, id];
