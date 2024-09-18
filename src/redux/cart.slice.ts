import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/type/type";

export interface CartState {
  cart: Product[];
}
interface UpdateCartPayload {
  id: number;
  value: number;
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
    updateToCart: (state, action: PayloadAction<UpdateCartPayload>) => {
      let { id, value } = action.payload;
      let newcart = state.cart.map((item: Product) =>
        item.id == id
          ? {
              ...item,
              quantity: (item.quantity || 0) + value,
            }
          : item
      );
      state.cart = newcart;
    },
    deleteToCart: (state, action: PayloadAction<number>) => {
      let id = action.payload;
      let newcart = state.cart.filter((item) => item.id !== id);
      state.cart = newcart;
    },
  },
});

export const { addToCart, deleteToCart, updateToCart } = cartSlice.actions;

export default cartSlice.reducer;
