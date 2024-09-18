import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authUser = createAsyncThunk(
  "authUser",
  async (data: { username: string; password: string }) => {
    const res = await axios.post("https://fakestoreapi.com/auth/login", data);
    return res?.data;
  }
);
