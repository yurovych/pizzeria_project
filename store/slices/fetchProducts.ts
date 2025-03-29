/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PizzaType } from "@/types/generalTypes";

type ServicesType = {
    objects: PizzaType[];
    loading: boolean;
    error: string;
};

const initialState: ServicesType = {
    objects: [],
    loading: false,
    error: '',
};

export const fetchProductsAsync = createAsyncThunk(
    'products/fetch',
    async () => {
        const products = await fetch('/api/pizzaApi');
        return products.json();
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.objects = action.payload;
                state.loading = false;
                state.error = '';
            })
            .addCase(fetchProductsAsync.rejected, (state) => {
                state.loading = false;
                state.error = 'failed to load products';
            });
    },
});

export default productsSlice.reducer;