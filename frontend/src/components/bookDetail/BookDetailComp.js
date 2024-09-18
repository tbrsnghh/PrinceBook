import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookDetail } from "../../store/booksSlice";
import './bookDetail.scss'

function BookDetailComp() {
  const { id } = useParams();
  const { a_book } = useSelector((state) => state.books);
  const book = a_book;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookDetail(id));
  }, [id, dispatch]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {book ? (
        <div className="container flex">
          <div className="book_cover w-1/3">
            <img
              src={book && book.img}
              alt="Book cover"
              className="w-full rounded-lg"
            />
            <div className="flex mt-4 space-x-2">
              {/* map image click vô hiển thị */}
              <img
                src="https://placehold.co/50x70"
                alt="Thumbnail 1"
                className="w-1/5 rounded-lg"
              />
              <div className="w-1/5 flex items-center justify-center bg-gray-200 rounded-lg text-gray-600">
                +9
              </div>
            </div>
            <button className="button-add-to-cart">
              Thêm vào giỏ hàng
            </button>
            <button className="button-add-to-cart">
              Mua ngay
            </button>
          </div>

          <div className="w-2/3 pl-4">
            <h1 className="text-2xl font-bold">Cây Cam Ngọt Của Tôi</h1>
            <p className="text-gray-600">
              Nhà cung cấp: <span className="text-blue-500">Nhã Nam</span>
            </p>
            <p className="text-gray-600">
              Nhà xuất bản:{" "}
              <span className="text-blue-500">NXB Hội Nhà Văn</span>
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
            <div className="mt-4 bg-red-100 p-2 rounded-lg flex items-center">
              <span className="bg-red-500 text-white px-2 py-1 rounded-lg">
                FLASH SALE
              </span>
              <span className="ml-2 text-red-500 font-bold text-lg">
                00 : 02 : 40
              </span>
            </div>
            <div className="mt-4">
              <span className="text-red-500 text-2xl font-bold">84.240 đ</span>
              <span className="line-through text-gray-500 ml-2">108.000</span>
              <span className="text-red-500 ml-2">-22%</span>
            </div>
            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="font-bold">Thông tin vận chuyển</h2>
              <p className="text-gray-600">
                Giao hàng đến
                <span className="text-blue-500">
                  Phường Bến Nghé, Quận 1, Hồ Chí M
                </span>
                <span className="text-blue-500">Thay đổi</span>
              </p>
              <p className="text-gray-600 flex items-center">
                <i className="fas fa-truck text-green-500 mr-2"></i> Giao hàng
                tiêu chuẩn
              </p>
              <p className="text-gray-600">
                Dự kiến giao <span className="font-bold">Thứ năm - 19/09</span>
              </p>
            </div>
            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="font-bold">
                Ưu đãi liên quan <span className="text-blue-500">Xem thêm</span>
              </h2>
              <div className="flex space-x-2 mt-2">
                <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
                  Mã giảm 10k - d...
                </div>
                <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
                  Mã giảm 25k - d...
                </div>
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  ShopeePay: giảm...
                </div>
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  Vnpay: giảm 5k c...
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="font-bold">Số lượng:</span>
              <div className="flex items-center ml-2">
                <button className="px-2 py-1 bg-gray-200 rounded-l-lg">
                  -
                </button>
                <input
                  type="text"
                  value="1"
                  className="w-12 text-center border-t border-b border-gray-200"
                />
                <button className="px-2 py-1 bg-gray-200 rounded-r-lg">
                  +
                </button>
              </div>
            </div>
            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="font-bold">Thông tin chi tiết</h2>
              <p className="text-gray-600">Mã hàng: 8935235228351</p>
              <p className="text-gray-600">
                Tên Nhà Cung Cấp: <span className="text-blue-500">Nhã Nam</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
      {/* <div className="mt-6">
        <h3 className="text-2xl font-bold">About the author</h3>
        {/* {/* <div className="flex items-center mt-2">  
          <img src={book.authorImage} alt={book.author} className="w-12 h-12 rounded-full mr-4" />  
          <div>  
            <p className="font-semibold">{book.author}</p>  
            <p className="text-gray-600">{book.authorBooksCount} books · {book.authorFollowers} followers</p>  
          </div>   
        </div>   
      </div> */}
    </div>
  );
}

export default BookDetailComp;
