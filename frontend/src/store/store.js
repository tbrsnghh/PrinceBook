import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './booksSlice';
import cartSlice from './cartSlice';

const store=configureStore({
    reducer:{
        books: booksSlice,
        cart: cartSlice
    }
})
export default store