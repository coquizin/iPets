import { QueryKey } from "@tanstack/react-query";

export const keyListProvider = (): QueryKey => [`providers`];
export const keyGetProvider = (id: string): QueryKey => [`provider`, id];
