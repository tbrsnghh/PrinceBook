import React from "react";  

export default function ItemsOrder({ items }) {  
  return (  
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">  
      <h2 className="text-2xl font-bold mb-4">Items Order</h2>  
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
    </div>  
  );  
}