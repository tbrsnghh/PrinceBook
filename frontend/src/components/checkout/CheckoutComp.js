import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Items_order from "./Items_order";
import UserInfo from "./UserInfo";
import { postOrder } from "../../store/orderSlice";

import { removeItemFromCart } from "../../store/cartSlice";
import { postOrderDetail } from "../../store/orderDetailSlice";

export default function CheckoutComp() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const { status, error, order_latest, orders } = useSelector((state) => state.orders);
  const items_order = cart.cartItems.filter((item) => item.checked);
  const user_info = user.user;

  const [note, setNote] = useState("");
  const [shipping_address, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const [order, setOrder] = useState({
    email: user_info.gmail,
    address: user_info.address,
    note: "",
    username: user_info.username,
    phone_number: user_info.phone,
    total_Price: cart.totalMoney,
    shipping_method: "",
    shipping_address: "",
    shipping_date: "",
    payment_method: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      note: note,
      shipping_address: shipping_address,
      payment_method: paymentMethod,
    }));
  }, [note, shipping_address, paymentMethod]);
  
  const handleThanhToan = async () => {
    try {
      const resultAction = await dispatch(postOrder(order)).unwrap(); // Wait for the order to be posted

      alert("Đặt hàng thành công");

      items_order.forEach((item) => {
        dispatch(
          postOrderDetail({
            price: item.price,
            count: item.quantity,
            order_id: resultAction.id, // Use the returned order id
            book_id: item.id,
            total_price: item.total,
          })
        );
        console.log("Order detail posted", item.id);
        dispatch(removeItemFromCart(item.id));
      });

      // Clear form and redirect
      setTimeout(() => {
        window.location.href = "/cart";
      }, 100);
    } catch (err) {
      alert("Đặt hàng thất bại");
      console.error("Error placing order: ", err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="flex flex-row items-start justify-between">
        <UserInfo
          order={order}
          note={note}
          setNote={setNote}
          shipping_address={shipping_address}
          setShippingAddress={setShippingAddress}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        <div className="w-4"></div>
        <Items_order
          items={items_order}
          order={order}
          handleThanhToan={handleThanhToan}
        />
      </div>
    </div>
  );
}
