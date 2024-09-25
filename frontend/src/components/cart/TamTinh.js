import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TamTinh({totalMoney}) {
    const [discount, setDiscount] = useState(0);
    const [totalOrder, setTotalOrder] = useState(totalMoney + discount);
    useEffect(() => {
        setTotalOrder(totalMoney + discount);
    }, [totalMoney, discount]);
  return (
    <div className="flex flex-col md:basis-1/4 bg-gray-100 p-4 rounded">
    {/* Thông tin giao hàng */}
      <div className="mb-4">
        <div className="font-bold mb-2">Giao tới</div>
        <div className="text-sm space-y-2">
          <div >Nguyễn Hoàng Hà</div>
          <div className="ml-2">0393671401</div>
          <div className="ml-2">
            2987/7, Hùng Vương, Ấp Hòa Bình, Xã Vĩnh Thanh, Huyện
            Nhơn Trạch, Đồng Nai
          </div>
          <a href="#" className="text-blue-500 ml-2">
            Thay đổi
          </a>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between">
          <span>Tạm tính</span>
          <span>{new Intl.NumberFormat("vi-VN", {style: "currency",currency: "VND",}).format(totalMoney)}</span>
        </div>
        <div className="flex justify-between">
          <span>Giảm giá</span>
          <span>{new Intl.NumberFormat("vi-VN", {style: "currency",currency: "VND",}).format(discount)}</span>
        </div>
      </div>
      <div className="flex justify-between text-red-500 font-bold mb-4">
        <span>Tổng tiền</span>
        <span>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(totalMoney)}
        </span>
      </div>
      <Link to="/checkout">
      <button className="w-full bg-red-500 text-white py-2 rounded">
        Mua Hàng
      </button>
      </Link>
      
    </div>
  );
}
