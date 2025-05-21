/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import getAllProductsFunction from "./act/AllProductsAct";
import { type TLoading } from "./../../Types/sharedTypes";
import { type IProductState } from "./../../Types/sharedTypes";

interface ProductState {
    products: IProductState[];
    loading: TLoading;
    error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: "succeeded",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    display: (state, action) => {
      console.log("increment", state.loading);
      console.log("increment", action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllProductsFunction.pending, (state) => {
      state.loading == "pending";
      state.error == null;
    }),
      builder.addCase(getAllProductsFunction.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.products = action.payload;
      }),
      builder.addCase(getAllProductsFunction.rejected, (state, action) => {
        state.loading == "failed";
        state.error == action.error;
      });
  },
});

export default productSlice.reducer;
export const { display } = productSlice.actions;
