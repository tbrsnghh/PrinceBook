import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const BASE_URL = 'https://66a07b337053166bcabb89f5.mockapi.io/api/v1/';
// const BASE_URL = 'http://ec2-54-169-253-108.ap-southeast-1.compute.amazonaws.com:8080';
const BASE_URL = 'http://ec2-18-136-203-0.ap-southeast-1.compute.amazonaws.com:8080'
export const getBooks=createAsyncThunk('books/getBooks',async (thunkAPI)=>{
  const url = BASE_URL + "/api/book";
  try{
      const response=await axios.get(url);
      return response.data;
  }
  catch (error){
      return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});

// Get Books Detail
export const getBookDetail=createAsyncThunk('books/getBookDetail',async (id,thunkAPI)=>{
  const url = BASE_URL + "/api/book/" + id;
  try{
      const response=await axios.get(url);
      return response.data;
  }
  catch (error){
      return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
})
// Config Books Store
const booksSlice = createSlice({
  name: 'books',  
  initialState: {  
    status: 'idle',  
    error: null,  
    books: null,  
    a_book: null,
    totalPages: 0,  
    message: "",  
  },  
    reducers:{
      
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getBooks.pending,(state,action)=>{
            state.status='loading';
        })
        .addCase(getBooks.fulfilled,(state,action)=>{
            state.books=action.payload.data;
            state.message=action.payload.message;
            state.status=action.payload.status;
        })
        //get book detail
        .addCase(getBooks.rejected,(state,action)=>{
            state.status='failed';
            state.error=action.payload;
        })
        .addCase(getBookDetail.pending,(state,action)=>{
            state.status='loading';
        })
        .addCase(getBookDetail.fulfilled,(state,action)=>{
            //console.log(action.payload);
            state.a_book=action.payload;
            state.status='succeeded';
        })
    }
})
export const {  } = booksSlice.actions;
export default booksSlice.reducer