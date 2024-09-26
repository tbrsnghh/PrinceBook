import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL_LOCAL, BASE_URL_AWS_1, BASE_URL_AWS_2 } from '../store/base_url';

const BASE_URL = BASE_URL_LOCAL;

export const getBooks=createAsyncThunk('books/getBooks',async (thunkAPI)=>{
  const url = BASE_URL + "/book";
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
  const url = BASE_URL + "/book/" + id;
  try{
      const response=await axios.get(url);
      return response.data;
  }
  catch (error){
      return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
})
export const searchBooks=createAsyncThunk('books/searchBooks',async (bookName,thunkAPI)=>{
  const url = BASE_URL + "/book/searchBooks?bookName=" + bookName;
  try{
      const response=await axios.get(url);
      return response.data;
  }
  catch (error){
      return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
})
export const getBooksByCategory=createAsyncThunk('books/getBooksByCategory',async (categoryName,thunkAPI)=>{
  const url = BASE_URL + "/book/searchBooks/category?categoryName=" + categoryName;
  try{
      const response=await axios.get(url);
      return response.data;
  }
  catch (error){
      return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
})

// Get Images
// Get all images by book id
export const getAllImagesByBookId = createAsyncThunk('books/getAllImagesByBookId', async (id, thunkAPI) => {
    const url = BASE_URL + `/book/getAllImage/${id}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
    }
  });
export const getImages = createAsyncThunk('books/getImages', async (imgname, thunkAPI) => {
    const url = BASE_URL + `/book/images//${imgname}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
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
    searchBooks: null, 
    booksByCategory: null, 
    totalPages: 0,  
    images: null,
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
        .addCase(getBookDetail.rejected,(state,action)=>{
            state.status='failed';
            state.error=action.payload;
            
        })
        .addCase(searchBooks.pending,(state,action)=>{
            state.status='loading';
        })
        .addCase(searchBooks.fulfilled,(state,action)=>{
            state.searchBooks=action.payload.data;
            state.message=action.payload.message;
            state.status=action.payload.status;
        })
        .addCase(searchBooks.rejected,(state,action)=>{
            state.status='failed';
            state.searchBooks=null;
            state.error=action.payload;
        })
        .addCase(getBooksByCategory.pending,(state,action)=>{
            state.status='loading';
        })
        .addCase(getBooksByCategory.fulfilled,(state,action)=>{
            state.booksByCategory=action.payload.data;
            state.message=action.payload.message;
            state.status=action.payload.status;
        })
        .addCase(getBooksByCategory.rejected,(state,action)=>{
            state.status='failed';
            state.booksByCategory=null;
            state.error=action.payload;
        })
        .addCase(getAllImagesByBookId.pending,(state,action)=>{
            state.status='loading';
        })
        .addCase(getAllImagesByBookId.fulfilled,(state,action)=>{
            state.images=action.payload.data;
            state.message=action.payload.message;
            state.status=action.payload.status;
        })
        .addCase(getAllImagesByBookId.rejected,(state,action)=>{
            state.status='failed';
            state.images=null;
            state.error=action.payload;
        })  
    }
})
export const {  } = booksSlice.actions;
export default booksSlice.reducer