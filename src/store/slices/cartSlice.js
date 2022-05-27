import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addtocart(state,action) {
            state.push(action.payload);
        },
        removefromcart(state,action){
            return state.filter( product => product.id !== action.payload);
        }
    }
});

export const { addtocart, removefromcart } = cartSlice.actions;
export default cartSlice.reducer;
