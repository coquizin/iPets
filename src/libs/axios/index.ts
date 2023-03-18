import axios from "axios";
import { API_URL } from "@configs/environment";
import { setupInterceptors } from "./interceptors";

export const api = axios.create({
  baseURL: API_URL,
});

export const apiCEP = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

setupInterceptors(api);
