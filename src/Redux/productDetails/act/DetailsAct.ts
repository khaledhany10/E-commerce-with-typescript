import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type ProductDetails = {
  _id: string;
  title: string;
  description: string;
  quantity: string;
  price: number;
  imageCover: string;
};

export const ProductDetailsFunction = createAsyncThunk(
  "productDetails/ProductDetailsFunction",
  async (_id: string, thunkApi) => {
    try {
      const { data } = await axios.get<{ data: ProductDetails }>(
        `https://ecommerce.routemisr.com/api/v1/products/${_id}`
      );
      return data.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Failed to fetch product details"
      );
    }
  }
);
