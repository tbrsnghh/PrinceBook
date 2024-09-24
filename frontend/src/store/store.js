import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './booksSlice';
import UserSlice from './UserSlice';
import cartSlice from './cartSlice';
import categoriesSlice from './categoriesSlice';
import CateSclice from './CateSclice';
import orderDetailSlice from './orderDetailSlice';
import Order1Slice from './Order1Slice';

const store=configureStore({
    reducer:{
        books: booksSlice,
        user:UserSlice,
        cart: cartSlice,
        categories: categoriesSlice,
        category: CateSclice,
        orderDetail: orderDetailSlice,
        order1:Order1Slice
    }
})
export default store