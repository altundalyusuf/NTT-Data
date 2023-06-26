import {configureStore} from '@reduxjs/toolkit';
import productSlice from '../features/product/productSlice';
import navbarSlice from '../features/navbar/navbarSlice';



export const store = configureStore({
    reducer:{
        products: productSlice,
        isGridVisible: navbarSlice,
    }
})