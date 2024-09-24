// RelatedOffers.js
import React from "react";

function Offers({}) {
  return (
    <div className="mt-4 bg-gray-100 p-4 rounded-lg">
      <h2 className="font-bold">
        Ưu đãi liên quan <span className="text-blue-500">Xem thêm</span>
      </h2>
      <div className="space-y-2">
        <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
          Mã giảm 10k - d...
        </div>

        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
          ShopeePay: giảm...
        </div>
      </div>
    </div>
  );
}

export default Offers;