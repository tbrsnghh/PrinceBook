import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./book.scss";
import { Link} from "react-router-dom";
import { getAllImagesByBookId } from "../../store/booksSlice";

export default function Book({ book }) {
  const [images, setImages] = useState([]);
  
  

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await dispatch(getAllImagesByBookId(book.id)).unwrap();
        result.data && result.data.length > 0 && console.log(result.data[0].imagePath);
        setImages(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, [dispatch, book.id]);
  // const firstImage = images && images[0]?.imagePath;
  
  
  
  return (
    <Link to={`/book/${book.id}`}>
      <div
        className="flex flex-col justify-between  rounded-lg shadow-md overflow-hidden w-full max-w-xs 
    transition-transform transform hover:scale-105"
      >
        <img
          src={images.data && images.data.length > 0 && `http://localhost:8080/api/book/images/${images.data[0].imagePath}`}
          alt={book.name}
          className="h-2/3 w-full object-cover" // Chiều cao ảnh bằng 2/3 ô
        />
        <div className="h-1/3 min-h-[120px] flex flex-col p-3 flex-grow bg-white">
          <div className="text-red-600 text-lg font-semibold">
            {book.price ? 
              new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(book.price) :
              "Đang cập nhật"
            }
          </div>
          <div className="text-gray-700 text-md font-semibold mt-2">
            {book.name}
          </div>
          {/* Đanh giá */}
          {/* <div className="flex items-center mb-2">
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
          </div> */}
        </div>
      </div>
    </Link>
  );
}
