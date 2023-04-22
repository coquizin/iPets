import { Meta } from "@entities/Meta";
import { Address } from "../Address/address";
import { Pets } from "../Pets/pets";
import { CreditCard } from "../CreditCard/creditcard";

export interface Consumer {
  _id?: string;
  cpf?: string;
  name?: string;
  email?: string;
  phone?: string;
  birthDate?: string;
  password?: string;
  address?: Address;
  creditCard?: CreditCard;
  avatar?: string;
  pets?: Pets[];
}
