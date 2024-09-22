import React from "react";
import "./book.scss";
import { Link } from "react-router-dom";

export default function Book({ book }) {
  return (
    <Link to={`/book/${book.id}`}>
      <div
        className="flex flex-col justify-between border rounded-lg shadow-md overflow-hidden w-full max-w-xs 
    transition-transform transform hover:scale-105"
      >
        <img
          src="https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02482010_104821.jpg"
          alt={book.name}
          className="h-2/3 w-full object-cover" // Chiều cao ảnh bằng 2/3 ô
        />
        <div className="flex flex-col p-3 flex-grow bg-white">
          <div className="text-red-600 text-lg font-semibold">
            {book.price ? 
              new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(book.price) :
              "Đang cập nhật"
            }
          </div>
          <div className="text-gray-700 text-lg font-semibold mb-2">
            {book.name}
          </div>
          <div className="flex items-center mb-2">
            <div className="text-yellow-500 ">
              <i className="fas fa-star text-sm"></i>
              <i className="fas fa-star text-sm"></i>
              <i className="fas fa-star text-sm"></i>
              <i className="fas fa-startext-sm "></i>
              <i className="fas fa-star-half-alt text-sm"></i>
            </div>
            <div className="text-gray-500 text-sm ml-2">Đã bán 13181</div>
          </div>
          <div className="text-blue-600 text-sm">
            <i className="fas fa-tags"></i> Giảm 15K
          </div>
        </div>
      </div>
    </Link>
  );
}
