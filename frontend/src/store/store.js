import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './booksSlice';
import UserSlice from './UserSlice';
import cartSlice from './cartSlice';

const store=configureStore({
    reducer:{
        books: booksSlice,
        user:UserSlice,
        cart: cartSlice
    }
})
export default store