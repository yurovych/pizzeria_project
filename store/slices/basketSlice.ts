import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {PizzaType} from "@/types/generalTypes";

type CurrentType = {
    basketProducts: PizzaType[],
};

const initialState: CurrentType = {
    basketProducts: [],
};

const currentSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addOneProduct: (state, action: PayloadAction<PizzaType>) => {
            state.basketProducts.push(action.payload);
        },
        deleteOneProduct: (state, action: PayloadAction<string>) => {
            const index = state.basketProducts.findIndex((product) => product._id === action.payload);

            if (index >= 0) {
                state.basketProducts.splice(index, 1);
            }
        },
        deleteProductPosition: (state, action: PayloadAction<string>) => {
            state.basketProducts = state.basketProducts.filter((product) => product._id !== action.payload)
        }
    },
});

export default currentSlice.reducer;
export const {
    addOneProduct,
    deleteProductPosition,
    deleteOneProduct,
} = currentSlice.actions;