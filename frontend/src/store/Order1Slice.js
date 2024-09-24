import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL ='http://localhost:8080/api/order';

export const getAllOrders = createAsyncThunk('orders/getAllOrders',async (thunkAPI)=>{
    const url = BASE_URL;
    try{
            const response=await axios.get(url);
            return response.data;
    }
    catch (error){
            return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
    }
});

export const countOrders= createAsyncThunk('orders/countOrders',async (thunkAPI)=>{
    const url = BASE_URL+"/countOrders";
    try{
        const response=await axios.get(url);   
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// tong doanh so
export const sumOrders =createAsyncThunk('orders/sumOrders',async (thunkAPI)=>{
    const url = BASE_URL+"/sumOrders";
    try{
        const response=await axios.get(url);
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const listOrder = createAsyncThunk('orders/listOrder',async (username,thunkAPI)=>{
    const url = BASE_URL+`/${username}`;
    try{
        const response=await axios.get(url);
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


const Order1Slice = createSlice({
    name: "order1",
    initialState: {
        getAllOrder: null,
        message: "",
        status: "idle",
        error: null,
        countOrder:null,
        sumOrder:null,
        order1:null
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
         
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.status = action.payload.status;
                state.message =action.payload.message;
                state.getAllOrder = action.payload.data;
            })
            .addCase(getAllOrders.rejected,(state,action)=>{
                state.error=action.payload.data;
                state.status=action.payload.status;
            })
            .addCase(countOrders.fulfilled, (state, action) => {
                state.countOrder = action.payload.data;
            })
            .addCase(sumOrders.fulfilled, (state, action) => {
                state.sumOrder = action.payload.data;
            })
            .addCase(listOrder.fulfilled, (state, action) => {  
                state.order1 = action.payload.data;
            })
             




        }

});
export default Order1Slice.reducer;