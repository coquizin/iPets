import { Meta } from "@entities/Meta";

export interface Address extends Meta {
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  postcode: string;
  district: string;
  uf: string;
}
