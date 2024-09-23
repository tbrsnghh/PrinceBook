import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Cart1() {
  const { cartItems, totalQuantity } = useSelector((state) => state.cart);

  return (
    <div className="p-4">
      <div className="flex justify-between items-start">
        <div className="w-3/4">
          <div className="mr-16">
            <h1 className="text-xl font-bold mb-4">GIỎ HÀNG</h1>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="checkbox checkbox-sm mr-2" />
              <span>Tất cả ({totalQuantity} cuốn sách)</span>
            </div>
            <div className="border-b pb-2 mb-2">
              <div className="flex items-center">
                <i className="fas fa-store mr-2"></i>
                <span>Tiki Trading</span>
              </div>
            </div>
            <div className="space-y-12 my-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between space-y-2"
                >
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm mr-2"
                    />
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-20 mr-4"
                    />
                    <div>
                      <div className="font-bold text-black">{item.name}</div>
                      <div className="text-gray-500 text-sm"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-red-500 font-bold">{item.price}</div>
                    <div className="text-gray-500 line-through">
                      {/* {item.oldPrice} */}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <button className="px-2 py-1 bg-gray-200 rounded-l-lg">
                      -
                    </button>
                    <span className="w-12 text-center border-t border-b border-gray-200">
                      {item.quantity}
                    </span>
                    <button className="px-2 py-1 bg-gray-200 rounded-r-lg">
                      +
                    </button>
                  </div>
                  {/* <div className="text-red-500 font-bold">{item.total}</div> */}
                  <button className="text-gray-500">
                    <i className="fas fa-trash-alt "></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/4 bg-gray-100 p-4 rounded">
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
          <div className="mb-4">
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
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <span>Tạm tính</span>
              <span>119.000đ</span>
            </div>
            <div className="flex justify-between text-green-500">
              <span>Giảm giá từ Deal</span>
              <span>-29.700đ</span>
            </div>
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
    </div>
  );
}
