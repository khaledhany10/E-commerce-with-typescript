import { type TLoading, type TGetCategories } from './../../Types/sharedTypes';
import { createSlice } from "@reduxjs/toolkit";
import getCategoriesFunction from "./act/CategoriesAct";


interface GetCategories {
    categories:TGetCategories;
    loading:TLoading;
    error: string | null;
}

const initialState: GetCategories = {
    categories: [],
    loading: "succeeded",
    error: null,
};

const getAllCategories = createSlice({
    name: "getCategories",
    initialState,
    reducers: {
        increament: (state, action) => {
            console.log("state.categories", state.categories);
            console.log("action.type", action.payload);
        },
    },
    extraReducers(builder) {
    builder.addCase(getCategoriesFunction.pending, (state) => {
        state.loading = "pending";
        state.error = null;
    });
    builder.addCase(getCategoriesFunction.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.categories = action.payload;
    });
    builder.addCase(getCategoriesFunction.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
        }
    });
    },
});

export default getAllCategories.reducer;

export { getCategoriesFunction };

export const { increament } = getAllCategories.actions;
