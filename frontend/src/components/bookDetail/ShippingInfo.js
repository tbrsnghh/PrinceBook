// ShippingInfo.js  
import React from "react";  

export default function ShippingInfo() {  
  return (  
    <div className="mt-4 bg-gray-100 p-4 rounded-lg">  
      <h2 className="font-bold">Thông tin vận chuyển</h2>  
      <p className="text-gray-600">  
        Giao hàng đến <span className="text-blue-500">CHƯA CÓ</span>  
        <br />  
        <span className="text-blue-500">Thay đổi</span>  
      </p>  
      <p className="text-gray-600 flex items-center">  
        <i className="fas fa-truck text-green-500 mr-2"></i> Giao hàng tiêu chuẩn  
      </p>  
      <p className="text-gray-600">  
        Dự kiến giao <span className="font-bold">Thứ năm - 19/09</span>  
      </p>  
    </div>  
  );  
}  