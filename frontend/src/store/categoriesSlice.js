import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  status: "idle",
  error: null,
};
// const BASE_URL = 'http://ec2-54-169-253-108.ap-southeast-1.compute.amazonaws.com:8080';
// const BASE_URL = 'http://localhost:8080//api/category';
const BASE_URL = 'http://ec2-18-136-203-0.ap-southeast-1.compute.amazonaws.com:8080/api/category';
export const getCategories=createAsyncThunk('categories/getCategories',async (thunkAPI)=>{
  const url = BASE_URL;
  try{
      const response=await axios.get(url);
      return response.data;
  }
  catch (error){
      return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
})

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload.data;
        console.log(action.payload);
        
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { } = categoriesSlice.actions;
export default categoriesSlice.reducer;
