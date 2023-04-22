import { Meta } from "@entities/Meta";

export interface ServiceModel extends Meta {
  _id: string;
  name: string;
  price: number;
  providerId: string;
  thumbnail?: string;
  description?: string;
}
