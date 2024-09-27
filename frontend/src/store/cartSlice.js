import { createSlice } from "@reduxjs/toolkit";
const loadCartFromLocalStorage = () => {
  const cartItemsString = localStorage.getItem("cartItems");
  return cartItemsString ? JSON.parse(cartItemsString) : [];
};
const initialState = {
  cartItems: loadCartFromLocalStorage(),
  selectAll: false,
  totalQuantity: 0,
  totalMoney: 0,
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
          total: newItem.price * newItem.quantity,
          checked: newItem.checked,
          imagePath: newItem.imagePath,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.total += newItem.price * newItem.quantity;
      }
      state.totalQuantity += newItem.quantity;
      state.totalMoney += newItem.price * newItem.quantity;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
        state.totalQuantity += quantity - existingItem.quantity;
        state.totalMoney += (quantity - existingItem.quantity) * existingItem.price;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalMoney -= existingItem.price * existingItem.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    toggleAllItemsChecked(state) {
      state.selectAll = !state.selectAll;
      state.cartItems.forEach((item) => (item.checked = state.selectAll));
    },
    toggleChecked(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.checked = !existingItem.checked;
      }
    },
    calcTotalMoney(state) {
      state.totalMoney = state.cartItems.reduce((total, item) => {
        return item.checked ? total + item.price * item.quantity : total;
      }, 0);
    },
    calcTotalQuantity(state) {
      state.totalQuantity = state.cartItems.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  toggleAllItemsChecked,
  toggleChecked,
  calcTotalMoney,
  calcTotalQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

initialState.cartItems = loadCartFromLocalStorage();

