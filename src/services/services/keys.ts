import { QueryKey } from "@tanstack/react-query";

export const keyListService = (): QueryKey => [`services`];
export const keyGetService = (id: number): QueryKey => [`service`, id];
