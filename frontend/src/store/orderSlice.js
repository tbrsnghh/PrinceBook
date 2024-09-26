import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL_LOCAL } from '../store/base_url';

const BASE_URL = BASE_URL_LOCAL;


export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (username, thunkAPI) => {
    const url = `${BASE_URL}/order/list/${username}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) { 
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)

// Async thunk to post an order via API
export const postOrder = createAsyncThunk(
  "order/postOrder",
  async (order, thunkAPI) => {
    const url = `${BASE_URL}/order`;
    try {
      const response = await axios.post(url, order);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Create the slice for orders
const initialState = {
  orders: [],
  order_latest: null,  // Only store the latest order separately for easy access
  status: "idle",
  error: null,
};
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.order_latest = action.payload.data;
        // state.orders.push(action.payload);
        console.log(state.order_latest);
        console.log(state.orders);
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload.data;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Export the reducer
export default ordersSlice.reducer;
