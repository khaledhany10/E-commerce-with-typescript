import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { IProductState } from "../../../Types/sharedTypes";


type TProducts = IProductState

const getAllProductsFunction = createAsyncThunk<TProducts[]>("AllProducts/getAllProductsFunction",
    async(_ ,thunckAPI) => {
    const {rejectWithValue} = thunckAPI;
    try {
        const {data} = await axios.get<{data : TProducts[]}>("https://ecommerce.routemisr.com/api/v1/products")
        return data.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
        return rejectWithValue(error.response?.data?.massege || "Failed To Response")
    }
})








export default getAllProductsFunction