import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from "next-redux-wrapper";
import products from "./slices/fetchProducts"
import basket from "./slices/basketSlice";


export const store = configureStore({
    reducer: {
        products: products,
        basket: basket,
    },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper(() => store);
