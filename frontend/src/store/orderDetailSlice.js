import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL_LOCAL } from '../store/base_url';

const BASE_URL = BASE_URL_LOCAL;

const initialState = {
  orderDetails: [],
  status: "idle",
  error: null,
};

// Async thunk to post order details via API
export const postOrderDetail = createAsyncThunk(
  "orderDetail/postOrderDetail",
  async (orderDetail, thunkAPI) => {
    const url = `${BASE_URL}/orderDetail`;
    try {
      const response = await axios.post(url, orderDetail);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Create the slice for order details
const orderDetailSlice = createSlice({
  name: "orderDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postOrderDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postOrderDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orderDetails.push(action.payload);

      })
      .addCase(postOrderDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Export the reducer
export default orderDetailSlice.reducer;
