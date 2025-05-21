import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TCresponse = { _id: string; name: string; slug: string; image: string };

const getCategoriesFunction = createAsyncThunk<TCresponse[]>(
    "Categories/getCategoriesFunction",
    async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
        const { data } = await axios.get<{ data: TCresponse[] }>("https://ecommerce.routemisr.com/api/v1/categories");
        return data.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return rejectWithValue(
            error.response?.data?.message || "Failed to fetch categories"
        );
        }
    }
);

export default getCategoriesFunction;
