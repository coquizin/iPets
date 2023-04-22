import { Meta } from "@entities/Meta";

export interface BankAccount extends Meta {
  agency: string;
  accountNumber: string;
  digit: string;
}
