import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { itemsType } from "./homeSlice";
import { RootState } from "./store";

interface cartState {
  cartItems: itemsType[];
  totalPrice: number;
}

const initialState: cartState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems(state, action: PayloadAction<itemsType[]>) {
      state.cartItems = action.payload;
    },
  },
});

export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state: RootState) => state.cart;
