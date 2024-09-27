import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllImagesByBookId, getBookDetail, resetImages } from "../../store/booksSlice";
import "./bookDetail.scss";
import ImageSlider from "./ImageSlider";
import Offers from "./Offers";
import ShippingInfo from "./ShippingInfo"; 
import Buying from "./Buying";
import DetailInfo from "./DetailInfo";
function BookDetailComp() {
  const { id } = useParams();
  const book = useSelector((state) => state.books.a_book);
  const {images} = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {  
    // dispatch(resetImages());
    dispatch(getBookDetail(id));
    dispatch(getAllImagesByBookId(id));
    setImagePath( images.length > 0 ? `http://localhost:8080/api/book/images/${images[0].imagePath}` : "");
    window.scrollTo(0, 0);
  }, [id]);    

  return (
    <div className="w-full max-w-7xl py-2 mx-auto">
      {book ? (
        <div className="container flex flex-wrap">
          {/* 1/3 bên trái */}
          <div className="w-full md:w-4/12">
            <div className="mt-4 ">
              {/* map image click vô hiển thị */}
              <ImageSlider cover_list={images} />
            </div>
          </div>
          {/* 2/3 bên phải */}
          <div className="w-full md:w-5/12 pl-4 ">
            <h1 className="text-xl font-bold mb-4 space-y-2">{book.name}</h1>
            <p className="text-gray-600">
              Tác giả: <span className="text-blue-500">{book.author}</span>
            </p>

            <div className="flex items-center mt-2">
              <div className="flex items-center text-yellow-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="ml-2 text-gray-600">(10 đánh giá)</span>
              <span className="ml-4 text-gray-600">| Đã bán 3.3k</span>
            </div>
            {/* <div className="mt-4 bg-red-100 p-2 rounded-lg flex items-center">
              <span className="bg-red-500 text-white px-2 py-1 rounded-lg">
                FLASH SALE
              </span>
              <span className="ml-2 text-red-500 font-bold text-lg">
                00 : 02 : 40
              </span>
            </div> */}
            <div className="mt-4">
              <span className="text-red-500 text-2xl font-bold">
                {book.price ? 
                  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(book.price) :
                  "Đang cập nhật"
                }
              </span>
              <span className="line-through text-gray-500 ml-2">
                {book.price ? 
                  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(book.price*1.05) :
                  "Đang cập nhật"
                }
              </span>
              <span className="text-red-500 ml-2">-22%</span>
            </div>
            <ShippingInfo />

            {/* Thông tin chi tiết cuốn sách */}

            <DetailInfo book={book} />
            {/* Mô tả sách */}
            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="font-bold text-lg mb-2">Mô tả sách</h2>
              {book.description && <p>{book.description}</p>}
            </div>
          </div>

          <div className="w-full md:w-3/12 p-4 ">
            <Buying book={book} imagePath={imagePath}/>
          </div>
          {/* Nguyên một cột cho vô giỏ hàng */}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
}

export default BookDetailComp;
