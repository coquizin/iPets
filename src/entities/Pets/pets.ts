import { Meta } from "@entities/Meta";

export interface Pets extends Meta {
  id: number;
  name: string;
  type: string;
  raça: string;
  age: string;
  complement: string;
}
