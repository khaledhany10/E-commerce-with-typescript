import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./AllProducts/AllProductsSlice"
import getAllCategories from "./Categories/CategoriesSlice"
import prodcutsDetailsSlice from "./productDetails/productDetailsSlice"

const configStore = configureStore({
    reducer:{
        products : productSlice,
        Categories : getAllCategories,
        ProductDetails : prodcutsDetailsSlice
    }
})



export default configStore
export type RootState = ReturnType<typeof configStore.getState>;
export type AppDispatch = typeof configStore.dispatch;