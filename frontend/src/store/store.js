import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './booksSlice';
import UserSlice from './UserSlice';
import cartSlice from './cartSlice';
import categoriesSlice from './categoriesSlice';
import CateSclice from './CateSclice';

const store=configureStore({
    reducer:{
        books: booksSlice,
        user:UserSlice,
        cart: cartSlice,
        categories: categoriesSlice
        category: CateSclice
    }
})
export default store