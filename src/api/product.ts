import { Product } from "@/type/type";
import axios from "axios";

export const getdata = async () => {
  return axios.get("https://fakestoreapi.com/products");
};

export const singleData = async (
  id: number | string
): Promise<{ data: Product }> => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
};
export const sortData = async (value: string): Promise<{ data: Product[] }> => {
  return axios.get(`https://fakestoreapi.com/products?sort=${value}`);
};
