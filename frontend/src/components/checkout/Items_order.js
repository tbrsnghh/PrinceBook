import React from "react";  

export default function ItemsOrder({ items, order, handleThanhToan }) {  
  return (  
    <div className="w-full md:w-1/2 mx-auto bg-white rounded-lg overflow-hidden p-6 border border-gray-300">  
      <h2 className="text-2xl font-bold mb-4">Order</h2>  
      {items && items.length > 0 ? (  
        items.map((item, index) => (  
          <div key={index} className="flex justify-between items-center p-4 border-b last:border-none">  
            <div>  
              <h3 className="text-lg font-semibold">{item.name}</h3>  
              <p className="text-blue-500">Số lượng: {item.quantity}</p>  
            </div>  
            <span className="text-red-600 font-semibold">  
              {new Intl.NumberFormat("vi-VN", {  
                style: "currency",  
                currency: "VND",  
              }).format(item.total)}  
            </span>  
          </div>  
        ))  
      ) : (  
        <p className="text-gray-500 text-center">No items ordered.</p>  
      )}  
      <div className="mt-4 p-4 border-t border-gray-300 bg-gray-100 rounded-lg">  
        <div className="flex justify-between font-bold text-lg">  
          <span>Tổng tiền</span>  
          <span className="text-red-600">{new Intl.NumberFormat("vi-VN", {style: "currency", currency: "VND"}).format(order.total_Price)}</span>  
        </div>  
      </div>  
      <div className="mt-4">  
        <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleThanhToan}>  
          Thanh toán  
        </button>  
      </div>  
    </div>  
  );  
}