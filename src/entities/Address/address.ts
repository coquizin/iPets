import { Meta } from "@entities/Meta";

export interface Address extends Meta {
  street: string;
  city: string;
  state: string;
  zip: string;
  uf: string;
  district: string;
  number: string;
  complement: string;
  country: string;
}
