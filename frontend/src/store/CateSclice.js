import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = 'http://localhost:8080/api/category';
export const fetchCate = createAsyncThunk("categories/fetchCate", async (thunkAPI) => {
            const url =BASE_URL;
            try{
                const response = await axios.get('http://localhost:8080/api/category');
                return response.data;
            } catch (error){
                return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
        }
})

const CateSlice = createSlice({
    name: "categories",
    initialState: {
        categorie:null,
     message: "",
        status: "idle",
        error: null,
    },
    reducers: {
                     
    },  
    extraReducers: (builder) => {
        builder
            
            .addCase(fetchCate.fulfilled, (state, action) => {
           
             
               state.categorie=action.payload.data;
                state.status = "succeeded";


                
            })
            .addCase(fetchCate.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload.data;
        
            });
    },
});
export const {  } = CateSlice.actions;
export default CateSlice.reducer;