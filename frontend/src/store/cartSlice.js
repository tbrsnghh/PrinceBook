import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
        });
        state.totalQuantity += newItem.quantity;
        state.totalPrice += newItem.price * newItem.quantity;
      } else {
        existingItem.quantity += newItem.quantity;
        state.totalQuantity += newItem.quantity;
        state.totalPrice += newItem.price * newItem.quantity;
      }
      
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
