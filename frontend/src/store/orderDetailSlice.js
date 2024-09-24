import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orderDetail: [],
  totalMoney: 0,
  status: "idle",
  error: null,
};

export const getOrderDetailById = createAsyncThunk(
  "orderDetail/getOrderDetailById",
  async (id, thunkAPI) => {
    const url = `http://ec2-18-136-203-0.ap-southeast-1.compute.amazonaws.com:8080/api/orderDetail/${id}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const orderDetailSlice = createSlice({
  name: "orderDetail",
  initialState,
  reducers: {
    addItemToOrderDetail(state, action) {
      const existingItem = state.orderDetail.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // Nếu item đã tồn tại, cập nhật số lượng và tổng tiền
        existingItem.quantity += action.payload.quantity;
        existingItem.total = existingItem.price * existingItem.quantity;
        state.totalMoney += action.payload.price * action.payload.quantity;
      } else {
        // Thêm item mới vào giỏ hàng
        state.orderDetail.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
          total: action.payload.price * action.payload.quantity,
          checked: false, // Thêm trạng thái checked mặc định là false
        });
        state.totalMoney += action.payload.price * action.payload.quantity;
      }
    },
    updateItemChecked: (state, action) => {
      const item = state.orderDetail.find((item) => item.id === action.payload);
      if (item) {
        item.checked = !item.checked;
      }
    },
    updateAllItemsChecked: (state, action) => {
      state.orderDetail.forEach((item) => {
        item.checked = action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderDetailById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrderDetailById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orderDetail = action.payload;
      })
      .addCase(getOrderDetailById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addItemToOrderDetail, updateItemChecked, updateAllItemsChecked } = orderDetailSlice.actions;
export default orderDetailSlice.reducer;
