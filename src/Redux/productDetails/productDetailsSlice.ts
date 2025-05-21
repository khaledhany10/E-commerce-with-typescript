import { type TLoading, type TProductDetails } from './../../Types/sharedTypes';
import { createSlice } from "@reduxjs/toolkit";
import { ProductDetailsFunction } from "./act/DetailsAct";

type TDetailsProductCome = { 
    details : TProductDetails,
    _id: string | null,
    Loading :TLoading,
    error : string | null
}

const initialState :TDetailsProductCome = {
    details : {} as TProductDetails,
    _id: null,
    Loading : "idle",
    error : null
}

const prodcutsDetailsSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers:{
    },
    extraReducers : (builder) =>{
        builder.addCase(ProductDetailsFunction.pending,(state)=>{
            state.Loading = "pending"
        })
        builder.addCase(ProductDetailsFunction.fulfilled,(state,action)=>{
            state.Loading = "succeeded"
            state.details = action.payload
        })
        builder.addCase(ProductDetailsFunction.rejected,(state)=>{
            state.Loading = "failed"
        })
    } 
})

export const x = prodcutsDetailsSlice.actions
export default prodcutsDetailsSlice.reducer