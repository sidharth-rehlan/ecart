
import cartReducer from './cartReducer';
import productListReducer from './productListReducer';
import { configureStore } from '@reduxjs/toolkit'


export default configureStore({
    reducer: {
        cart: cartReducer,
        productList : productListReducer
    } 
});

