import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { addItemToOrderDetail, updateItemChecked } from "../../store/orderDetailSlice";

export default function Cart1() {
  const {
    cart: { cartItems, totalQuantity },
    orderDetail: { orderDetail, status },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(true);
  const handleSelectAll = () => {
    setSelectAll((prev) => !prev);
  };

  const handleToggleItem = (item) => {
    dispatch(addItemToOrderDetail(item));
    console.log("Toggle item:", item);
    console.log(orderDetail);
    
     // Cập nhật trạng thái checked của item
  };
  const addOrder = () => {
    
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
          {cartItems.map((item, index) => (
            <CartItems key={index} item={item} 
            onToggleItem={() => handleToggleItem(item)}/>
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
            <a href="#" className="text-blue-500">
              Thay đổi
            </a>
          </div>
        </div>
        {/* Phần giảm giá nếu làm được */}
        {/* <div className="mb-4">
          <div className="font-bold">Tiki Khuyến Mãi</div>
          <div className="flex items-center justify-between bg-white p-2 rounded border">
            <div className="flex items-center">
              <i className="fas fa-tag text-green-500 mr-2"></i>
              <span>Giảm 10K phí vận chuyển</span>
            </div>
            <button className="text-blue-500">Bỏ Chọn</button>
          </div>
          <a href="#" className="text-blue-500 text-sm">
            Chọn hoặc nhập Khuyến mãi khác
          </a>
        </div> */}
        <div className="mb-4">
          <div className="flex justify-between">
            <span>Tạm tính</span>
            {/* <span>{order_detail.total}</span> */}
          </div>
          {/* <div className="flex justify-between text-green-500">
            <span>Giảm giá từ Deal</span>
            <span>-29.700đ</span>
          </div> */}
        </div>
        <div className="flex justify-between text-red-500 font-bold mb-4">
          <span>Tổng tiền</span>
          <span>89.300đ</span>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          Tiết kiệm 29.700đ (Đã bao gồm VAT nếu có)
        </div>
        <button className="w-full bg-red-500 text-white py-2 rounded">
          Mua Hàng (1)
        </button>
      </div>
    </div>
  );
}
