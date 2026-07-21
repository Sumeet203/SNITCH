import {createSlice} from "@reduxjs/toolkit";
import { getSellerProduct } from "../services/product.api";

const productSlice = createSlice({
    name : "product",
    initialState : {
        sellerProducts : []
    },
    reducers : {
        setSellerProducts : (state,action) => {
            state.sellerProducts = action.payload
        }
    }
});

export const {setSellerProducts} = productSlice.actions;
export default productSlice.reducer;