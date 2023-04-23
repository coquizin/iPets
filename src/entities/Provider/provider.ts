import { Address } from "../Address/address";
import { BankAccount } from "../BankAccount/bankaccount";

export interface Provider {
  _id?: string;
  cnpj?: string;
  name?: string;
  email?: string;
  password?: string;
  address?: Address;
  bankAccount?: BankAccount;
  avatar?: string;
}
