import React from "react";
import "./book.scss";
export default function Book({ book }) {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="border rounded-lg  p-6 max-w-xs">
          <img
            src="https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02482010_104821.jpg"
            alt=""
            className="w-full rounded-lg mb-4"
          />
          <div className="text-red-600 text-2xl font-bold mb-1">
            169.000đ <span className="text-gray-500 text-sm">-15%</span>
          </div>
          <div className="text-gray-700 text-base mb-2">
            {book.name}
          </div>
          <div className="flex items-center mb-2">
            <div className="text-yellow-500">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className="text-gray-500 text-sm ml-2">Đã bán 13181</div>
          </div>
          <div className="text-blue-600 text-sm">
            <i className="fas fa-tags"></i> Giảm 15K
          </div>
        </div>
      </div>
    </>
  );
}
