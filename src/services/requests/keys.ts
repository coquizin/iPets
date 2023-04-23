import { QueryKey } from "@tanstack/react-query";

export const keyListRequest = (): QueryKey => [`requests`];
export const keyGetRequest = (id: string): QueryKey => [`request`, id];
