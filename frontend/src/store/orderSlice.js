import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL_LOCAL, BASE_URL_AWS_1, BASE_URL_AWS_2 } from '../store/base_url';

// Choose your base URL. You can switch it based on the environment.
const BASE_URL = BASE_URL_LOCAL;

// Initial state for the order slice.
const initialState = {
  orders: [],
  order_latest: [],
  status: "idle", // Can be 'idle', 'loading', 'succeeded', or 'failed'
  error: null,
};

// Async thunk to post an order via API
export const postOrder = createAsyncThunk(
  "order/postOrder",
  async (order, thunkAPI) => {
    const url = `${BASE_URL}/order`;
    try {
      const response = await axios.post(url, order);
      return response.data; // Returning the API response data
    } catch (error) {
      // Return an error message using thunkAPI's rejectWithValue
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const postOrderDetail = createAsyncThunk(
  "order/postOrderDetail",
  async (orderDetail, thunkAPI) => {
    const url = `${BASE_URL}/orderDetail`;
    try {
      const response = await axios.post(url, orderDetail);
      return response.data; // Returning the API response data
    } catch (error) {
      // Return an error message using thunkAPI's rejectWithValue
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)
// Create a slice to handle the state for orders
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // You can add other reducer methods here for additional functionality
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Push the new order into the orders array
        state.orders.push(action.payload);
        state.order_latest = action.payload;
        console.log("Order created:", action.payload);
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Capture and store the error
      })
      .addCase(postOrderDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postOrderDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Push the new order into the orders array
        
        console.log("Order detail added", action.payload);
      })
      .addCase(postOrderDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Capture and store the error
      });
  },
});

// Exporting actions (if any) and the reducer
export const {} = ordersSlice.actions;
export default ordersSlice.reducer;
