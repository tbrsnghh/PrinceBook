import React from "react";
import Offers from "./Offers";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";
export default function Buying({book}) {
  const dispatch = useDispatch()
  const addItem = () => {
    const item = {
      id: book.id,
      name: book.name,
      price: book.price
    }
    dispatch(addItemToCart(item))
  }
  return (
    <>
      {/* className="w-1/3 fixed right-0 top-20 h-full bg-white p-4 shadow-lg" */}
      <Offers />
      {/* cart quantity*/}
      <div className="mt-4 flex items-center">
        <span className="font-bold">Số lượng:</span>
        <div className="flex items-center ml-2">
          <button className="px-2 py-1 bg-gray-200 rounded-l-lg">-</button>
          <input
            type="text"
            value="1"
            className="w-12 text-center border-t border-b border-gray-200"
          />
          <button className="px-2 py-1 bg-gray-200 rounded-r-lg">+</button>
        </div>
      </div>
      <div className="mt-4 flex">  
        <span className="font-bold">Tạm tính: </span>  
        <span className="block text-lg font-semibold ml-2">151.000₫</span>  
      </div>   
      <button className="button-add-to-cart" onClick={addItem}>Thêm vào giỏ hàng</button>
      <button className="button-add-to-cart" >Mua ngay</button>
    </>
  );
}
