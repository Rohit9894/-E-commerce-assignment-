import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authUser = createAsyncThunk(
  "authUser",
  async (data: { username: string; password: string }) => {
    console.log(data)
    const res = await axios.post("https://fakestoreapi.com/auth/login", data);
    console.log(res?.data)
    return res?.data;
  }
);
