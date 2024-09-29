import React, { useState } from "react";
import Offers from "./Offers";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
export default function Buying({ book, imagePath}) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addItem = () => {
    const item = {
      id: book.id,
      name: book.name,
      price: book.price,
      quantity: quantity,
      checked: false,
      imagePath: imagePath 
    };
    dispatch(addItemToCart(item));
  };
  const handleBuyNow = () => {
    const order = {
      id: book.id,
      name: book.name,
      price: book.price,
      quantity: quantity,
      total: quantity * book.price,
      imagePath: imagePath 
    };

    navigate("/checkout", { state: { order } }); // Sử dụng state để gửi đơn hàng
  };
  const setQuantityTru = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };
  // const setQuantityCong = () => {
  //   const [quantity, setQuantity] = useState(1);
  // }
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      {/* className="w-1/3 fixed right-0 top-20 h-full bg-white p-4 shadow-lg" */}
      {/* <Offers /> */}
      {/* cart quantity*/}
      <div className="mt-4 flex items-center ">
        <span className="font-bold">Số lượng:</span>
        <div className="flex items-center ml-2">
          <button
            className="px-2 py-1 bg-gray-200 rounded-l-lg"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          >
            -
          </button>
          <span className="w-12 text-center border-t border-b border-gray-200">
            {quantity}
          </span>
          <button
            className="px-2 py-1 bg-gray-200 rounded-r-lg"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="mt-4 flex">
        <span className="font-bold">Tạm tính: </span>
        <span className="block text-lg font-semibold ml-2 text-red-500">          {book.price
            ? new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(book.price * quantity)
            : "Đang cập nhật"}
        </span>
      </div>
      <button className="button-add-to-cart" onClick={addItem}>
        Thêm vào giỏ hàng
      </button>
      <button className="button-add-to-cart" onClick={handleBuyNow}>
        Mua ngay
      </button>
    </div>
  );
}
