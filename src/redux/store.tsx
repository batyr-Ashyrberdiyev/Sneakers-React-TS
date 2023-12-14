import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import cartSlice from "./cartSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { home: homeSlice, cart: cartSlice },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
