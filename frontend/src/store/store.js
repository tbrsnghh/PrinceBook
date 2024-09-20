import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './booksSlice';
import UserSlice from './UserSlice';

const store=configureStore({
    reducer:{
        books: booksSlice,
        user:UserSlice
    }
})
export default store