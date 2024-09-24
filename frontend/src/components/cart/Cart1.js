import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { addItemToOrderDetail, updateAllItemsChecked } from "../../store/orderDetailSlice";
import { calcTotalMoney, calcTotalQuantity, toggleAllItemsChecked, toggleChecked } from "../../store/cartSlice";

export default function Cart1() {
  const cart = useSelector((state) => state.cart);
  const { cartItems, totalQuantity, selectAll, totalMoney} = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calcTotalMoney());
    dispatch(calcTotalQuantity());
    console.log("cart", cart);
  }, [cart]);
  const handleSelectAll = () => {
    dispatch(toggleAllItemsChecked());
  };

  const handleToggleItem = (item) => {
    dispatch(toggleChecked(item.id));
  };

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="flex flex-col md:basis-3/4 mr-16">
        <h1 className="text-xl font-bold mb-4">GIỎ HÀNG</h1>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            className="checkbox checkbox-sm mr-2"
            onChange={handleSelectAll}
            checked={selectAll}
          />
          <span>Tất cả ({totalQuantity} cuốn sách)</span>
        </div>
        <div className="border-b pb-2 mb-2">
          <div className="flex items-center">
            <i className="fas fa-store mr-2"></i>
            <span>Tiki Trading</span>
          </div>
        </div>

        {/* Cart items */}
        <div className="space-y-2 my-1">
          <div className="flex items-center">
            <div className="basis-1/24 px-4 "></div>
            <div className="basis-1/12 pr-2"></div>
            <div className="basis-4/12 text-center">Books</div>
            <div className="basis-2/12 px-2 text-center">Price</div>
            <div className="basis-2/12 px-2 text-center">Quantity</div>
            <div className="basis-2/12 px-2 text-center">Subtotal</div>
          </div>
          {cartItems && cartItems.map((item, index) => (
            <CartItems key={index} item={item} onToggleItem={() => handleToggleItem(item)} />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:basis-1/4 bg-gray-100 p-4 rounded">
        <div className="mb-4">
          <div className="font-bold">Giao tới</div>
          <div className="text-sm">
            <div>Nguyễn Hoàng Hà | 0393671401</div>
            <div>
              Văn phòng 2987/7 Đường Hùng Vương Ấp Hòa Bình, Xã Vĩnh Thanh,
              Huyện Nhơn Trạch, Đồng Nai
            </div>
            <a href="#" className="text-blue-500">Thay đổi</a>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <span>Tạm tính</span>
            {/* <span>{order_detail.total}</span> */}
          </div>
        </div>
        <div className="flex justify-between text-red-500 font-bold mb-4">
          <span>Tổng tiền</span>
          <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalMoney)}</span>
        </div>
        <button className="w-full bg-red-500 text-white py-2 rounded">
          Mua Hàng (1)
        </button>
      </div>
    </div>
  );
}
