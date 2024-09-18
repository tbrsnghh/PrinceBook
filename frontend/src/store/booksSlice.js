import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://66a07b337053166bcabb89f5.mockapi.io/api/v1/';


export const getBooks=createAsyncThunk("student/books",async ({currentPage,limit},thunkAPI)=>{
  const url = BASE_URL + 'Books';
  try{
      const response=await axios.get(url);
      return response.data;
  }
  catch (error){
      return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});

// Config Books Store
const booksSlice = createSlice({
  name: 'books',  
  initialState: {  
    status: 'idle',  
    error: null,  
    books: null,  
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
            state.books=action.payload;
            console.log(action.payload);
            state.status='succeeded';
        })
    }
})
export const {  } = booksSlice.actions;
export default booksSlice.reducer