import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './booksSlice';
import UserSlice from './UserSlice';
import CateSclice from './CateSclice';

const store=configureStore({
    reducer:{
        books: booksSlice,
        user:UserSlice,
        category: CateSclice
    }
})
export default store