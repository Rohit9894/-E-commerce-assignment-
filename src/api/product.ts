import axios from "axios";

export const getdata = async () => {
  return axios.get("https://fakestoreapi.com/products");
};
