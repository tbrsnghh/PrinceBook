import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookDetail } from "../../store/booksSlice";
import "./bookDetail.scss";
import ImageSlider from "./ImageSlider";
import Offers from "./Offers";
import ShippingInfo from "./ShippingInfo";
import Buying from "./Buying";

function BookDetailComp() {
  const { id } = useParams();
  const book = useSelector((state) => state.books.a_book);
  console.log(book);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookDetail(id));
  }, []);
  const cover_list = [
    {
      url: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_217480.jpg",
    },
    {
      url: "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cay_cam_ngot_cua_toi/2020_12_17_16_50_30_12-390x510.jpg",
    },
    {
      url: "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cay_cam_ngot_cua_toi/2020_12_17_16_50_30_2-390x510.jpg",
    },
    {
      url: "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cay_cam_ngot_cua_toi/2020_12_17_16_50_30_3-390x510.jpg",
    },
    {
      url: "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cay_cam_ngot_cua_toi/2020_12_17_16_50_30_4-390x510.jpg",
    },
  ];
  
  return (
    <div className="w-full max-w-7xl py-2 mx-auto">
      {book ? (
        <div className="container flex flex-wrap">
          {/* 1/3 bên trái */}
          <div className="container w-full md:w-4/12 h-102 border">
            
            <div className="mt-4 space-x-2 h-32">
              {/* map image click vô hiển thị */}
              <ImageSlider
                cover_list={cover_list}   
              />
            </div>
          </div>
          {/* 2/3 bên phải */}
          <div className="w-full md:w-5/12 pl-4 ">
            <h1 className="text-xl font-bold">{book.name}</h1>
            <p className="text-gray-600">
              Tác giả: <span className="text-blue-500">CHƯA CÓ</span>
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
              <span className="text-red-500 text-2xl font-bold">
                CHƯA CÓ.240 đ
              </span>
              <span className="line-through text-gray-500 ml-2">
                CHƯA CÓ.000
              </span>
              <span className="text-red-500 ml-2">-22%</span>
            </div>
            <ShippingInfo />

            {/* Thông tin chi tiết cuốn sách */}
            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="font-bold">Thông tin chi tiết</h2>
              <p className="text-gray-600">Mã hàng: 8935235228351</p>
              <p className="text-gray-600">
                Tên Nhà Cung Cấp: <span className="text-blue-500">Nhã Nam</span>
              </p>
            </div>
            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
              <h2 className="font-bold">Mô tả sách</h2>
              <p>
                "Tiếp nối cuốn tiểu thuyết nổi tiếng HAI SỐ PHẦN về William Kane
                và Abel Rosnovski, Đứa con gái hoàng đàng là một câu chuyện được
                chắp bút của thế hệ tiếp theo. Câu chuyện đầy trớ trêu, trắc trở
                nhưng đầy nhân văn.
              </p>
              <h3 className="font-semibold mt-2">
                TƯƠNG LAI CỦA CÔ LÀ THAM VỌNG
              </h3>
              <p>
                Florentyna Rosnovski – con gái Abel – với một ý chí sắt đá di
                truyền từ người cha, cô quyết tâm theo đuổi mục tiêu lý tưởng
                của mình, đó là trở thành nữ Tổng thống Mỹ đầu tiên. Tuy thế,
                cuộc đời của cô, cũng giống như người cha của mình, cũng gập
                ghềnh với nhiều trắc trở mà người phụ nữ tham vọng này định phải
                vượt qua.
              </p>
              <p>
                Với hình tượng được lấy cảm hứng từ những nhân cách lớn như “bà
                đầm thép” Margaret Thatcher, Golda Meer, hay Indira Gandhi,
                Jeffrey Archer đã trả lời cho độc giả những câu hỏi về cuộc đời
                của số phận, về ý nghĩa của cuộc sống này. Vượt qua những khó
                khăn, vươn đến những vì sao chính là thông điệp mà cây bút tài
                ba muốn truyền tải.
              </p>
              <h3 className="font-semibold mt-2">Ý NGHĨA NHAN ĐỀ</h3>
              <p>
                Tiểu thuyết Đứa con gái hoàng đàng được dịch từ tác phẩm The
                Prodigal Daughter. Cái tên này được Jeffrey Archer đặt cho một
                Đứa con trong Kinh Thánh – The Prodigal Son. Ở Việt Nam, tích
                này được biết đến với cái tên Người con hoang đàng, hay Đứa con
                hoàng đàng trôi về. Cách đặt tên này tạo ra một sự kết nối giữa
                hai phần 1 – Hai số phận. Tiểu thuyết Hai số phận kể về cuộc đời
                của Kane và Abel – vốn dĩ là một bi kịch giữa Cain và Abel – một
                nguồn cảm hứng trong Kinh Thánh.
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/12 pl-4">
            <Buying book={book}/>
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
