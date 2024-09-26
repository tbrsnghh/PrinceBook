import React, { useEffect, useState } from "react";  
import { useDispatch } from "react-redux";  
import { Link } from "react-router-dom";  
import { getAllImagesByBookId } from "../../store/booksSlice";  
import "./book.scss";  

export default function Book({ book }) {  
  const [images, setImages] = useState([]);  
  const dispatch = useDispatch();  

  useEffect(() => {  

    const fetchImages = async () => {  
      try {  
        const result = await dispatch(getAllImagesByBookId(book.id)).unwrap();  
        if (result.data && result.data.length > 0) {  
          setImages(result);  
        }  
      } catch (error) {  
        console.log(error);  
      }  
    };  
    fetchImages();  
  }, [dispatch, book.id]);  

  return (  
    <Link to={`/book/${book.id}`}>  
      <div className="flex flex-col justify-between rounded-lg shadow-md overflow-hidden w-full max-w-xs transition-transform transform hover:scale-105">  
        <img  
          src={images.data && images.data.length > 0 && `http://localhost:8080/api/book/images/${images.data[0].imagePath}`}  
          alt={book.name}  
          className="h-72 w-full object-cover" // Set a fixed height  
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
        </div>  
      </div>  
    </Link>  
  );  
}