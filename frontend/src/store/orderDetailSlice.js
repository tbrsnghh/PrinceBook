import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orderDetail: [],
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
      return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
    }
  }
);

const orderDetailSlice = createSlice({
  name: "orderDetail",
  initialState,
  reducers: {
    addItemToOrderDetail(state, action) {
        console.log("Add item:", action.payload);
        
        state.orderDetail.push({
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            quantity: action.payload.quantity,
            total: action.payload.price * action.payload.quantity,
          });
        console.log(state.orderDetail);
        
    },
    updateItemChecked: (state, action) => {
        const item = state.orderDetail.find((item) => item.id === action.payload);
        if (item) {
          item.checked = !item.checked; // Đổi trạng thái checked
        }
      },
      updateAllItemsChecked: (state, action) => {
        state.orderDetail.forEach((item) => {
          item.checked = action.payload; // Cập nhật trạng thái checked cho tất cả item
        });
      },
  },
//   extraReducers: (builder) => {
    

    
//   },
});

export const { addItemToOrderDetail, updateItemChecked, updateAllItemsChecked } = orderDetailSlice.actions;
export default orderDetailSlice.reducer;
