// import React, { useEffect, useState } from "react";
// import { removeItemFromCart, updateItemQuantity } from "../../store/cartSlice";
// import { useDispatch } from "react-redux";

// export default function CartItems({ item, onToggleItem }) {
//   const { name, price, quantity, checked } = item;
//   const [quant, setQuant] = useState(quantity);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(
//       updateItemQuantity({
//         id: item.id,
//         quantity: quant,
//         total: price * quant,
//       })
//     );
//   }, [quant]);
  
//   const handleQuantityChange = (newQuantity) => {
//     setQuant(newQuantity);
//   };
//   const handleRemoveItem = (item) => {
//     if (window.confirm("Xoá sản phẩm khỏi giỏ hàng?")) {
//       dispatch(removeItemFromCart(item.id));
//     }
//   };
//   const handleToggleItem = (item) => {
    
//   }
//   return (
//     <div className="flex items-center border-b border-gray-200">
//       <div className="basis-1/24 px-2">
//         <input type="checkbox" className="checkbox checkbox-sm"
//           onChange={onToggleItem}
//           checked={checked}
//         />
//       </div>
//       <div className="basis-1/12 pr-2">
//         <img
//           src={item.img}
//           alt={item.title}
//           className="w-full h-20 object-cover"
//         />
//       </div>

//       <div className="basis-4/12 font-bold text-black">{item.name}</div>

//       <div className="basis-2/12 text-center text-red-500 font-bold">
//         {item.price
//           ? new Intl.NumberFormat("vi-VN", {
//               style: "currency",
//               currency: "VND",
//             }).format(item.price)
//           : "Đang cập nhật"}
//       </div>

//       <div className="basis-2/12 flex items-center justify-center">
//         <button
//           className="px-2 py-1 bg-gray-200 rounded-l-lg"
//           onClick={() => handleQuantityChange(quant - 1)}
//         >
//           -
//         </button>
//         <span className="w-12 text-center border-t border-b border-gray-200">
//           {quant}
//         </span>
//         <button
//           className="px-2 py-1 bg-gray-200 rounded-r-lg"
//           onClick={() => handleQuantityChange(quant + 1)}
//         >
//           +
//         </button>
//       </div>

//       <div className="basis-1/12 p-4">
//         <div className="text-red-500 font-bold">
//           {item.total
//             ? new Intl.NumberFormat("vi-VN", {
//                 style: "currency",
//                 currency: "VND",
//               }).format(price * quant)
//             : "Đang cập nhật"}
//         </div>
//       </div>
//       <div className="basis-1/12">
//         <button
//           className="text-gray-500"
//           onClick={() => handleRemoveItem(item)}
//         >
//           <i className="fas fa-trash-alt"></i>
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { removeItemFromCart, updateItemQuantity } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

export default function CartItems({ item, onToggleItem }) {
  const { name, price, quantity, checked } = item;
  const [quant, setQuant] = useState(quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateItemQuantity({
        id: item.id,
        quantity: quant,
        total: price * quant,
      })
    );
  }, [quant]);

  const handleQuantityChange = (newQuantity) => {
    setQuant(newQuantity);
  };

  const handleRemoveItem = (item) => {
    if (window.confirm("Xoá sản phẩm khỏi giỏ hàng?")) {
      dispatch(removeItemFromCart(item.id));
    }
  };

  return (
    <div className="flex items-center border-b border-gray-200">
      <div className="basis-1/24 px-2">
        <input
          type="checkbox"
          className="checkbox checkbox-sm"
          onChange={onToggleItem}
          checked={checked}
        />
      </div>
      <div className="basis-1/12 pr-2">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-20 object-cover"
        />
      </div>

      <div className="basis-4/12 font-bold text-black">{item.name}</div>

      <div className="basis-2/12 text-center text-red-500 font-bold">
        {item.price
          ? new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(item.price)
          : "Đang cập nhật"}
      </div>

      <div className="basis-2/12 flex items-center justify-center">
        <button
          className="px-2 py-1 bg-gray-200 rounded-l-lg"
          onClick={() => handleQuantityChange(quant - 1)}
        >
          -
        </button>
        <span className="w-12 text-center border-t border-b border-gray-200">
          {quant}
        </span>
        <button
          className="px-2 py-1 bg-gray-200 rounded-r-lg"
          onClick={() => handleQuantityChange(quant + 1)}
        >
          +
        </button>
      </div>

      <div className="basis-1/12 p-4">
        <div className="text-red-500 font-bold">
          {item.total
            ? new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(price * quant)
            : "Đang cập nhật"}
        </div>
      </div>
      <div className="basis-1/12">
        <button className="text-gray-500" onClick={() => handleRemoveItem(item)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}
