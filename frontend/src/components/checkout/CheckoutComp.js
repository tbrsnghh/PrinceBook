import React from "react";
import { useSelector } from "react-redux";
import Items_order from "./Items_order";
import UserInfo from "./UserInfo";
export default function CheckoutComp() {
  const { cart, user, orders } = useSelector((state) => state);
  const items_order = cart.cartItems.filter((item) => item.checked);
  const user_info = user.user;

  const order = [
    
  ]
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="flex flex-row items-start justify-between">
        <Items_order items={items_order} />

        <UserInfo user_info={user_info} />
      </div>
    </div>
  );
}
