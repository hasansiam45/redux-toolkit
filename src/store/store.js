import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer
    },
    middleware: [thunkMiddleware],
});