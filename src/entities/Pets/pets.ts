import { Meta } from "@entities/Meta";

export interface Pets extends Meta {
  name: string;
  species: string;
  race: string;
  age: string;
  description: string;
  avatar: string;
}
