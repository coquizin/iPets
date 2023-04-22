import { QueryKey } from "@tanstack/react-query";

export const keyListConsumer = (): QueryKey => [`consumers`];
export const keyGetConsumer = (id: string): QueryKey => [`consumer`, id];
