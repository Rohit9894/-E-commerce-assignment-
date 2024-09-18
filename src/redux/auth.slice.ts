import { authUser } from "@/api/auth";
import { createSlice } from "@reduxjs/toolkit";


export interface AuthState {
  loading: boolean;
  isAuth: boolean;
  error: boolean;
}

const initialState: AuthState = {
  isAuth: false,
  loading: false,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {

      state.isAuth = false;
      state.error = false;
      state.loading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        if (action?.payload.token) {
          state.loading = false;
          state.isAuth = true;
        }
      })
      .addCase(authUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
