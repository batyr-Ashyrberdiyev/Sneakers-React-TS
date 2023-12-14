import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

export const fetchSneakers = createAsyncThunk(
  "home/fetchSneakers",
  async () => {
    const { data } = await axios.get<itemsType[]>(
      "https://6578637bf08799dc804525c2.mockapi.io/items?"
    );

    return data;
  }
);

export type itemsType = {
  id: string;
  img: string;
  title: string;
  price: number;
};

interface homeState {
  items: itemsType[];
  status: "loading" | "success" | "error";
  search: string;
}

export enum status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

const initialState: homeState = {
  items: [],
  status: "loading",
  search: "",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<itemsType[]>) {
      state.items = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.pending, (state) => {
      state.items = [];
      state.status = status.LOADING;
    });
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = status.SUCCESS;
    });
    builder.addCase(fetchSneakers.rejected, (state) => {
      state.items = [];
      state.status = status.ERROR;
      alert("Error pending products");
    });
  },
});

export const selectHome = (state: RootState) => state.home;

export const { setItems, setSearch } = homeSlice.actions;

export default homeSlice.reducer;
