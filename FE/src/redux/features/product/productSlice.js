import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products:[]
}

export const getProducts = createAsyncThunk('getProducts',async()=>{
    const {data} = await axios.get('https://honey-badgers-ecommerce.glitch.me/products')
    return data
})

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.products = action.payload
        })
    }
})

export default productSlice.reducer