import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookLimitItems, getBooks, setPage } from "../../store/booksSlice";
import Pagination from "./Pagination";
import Book from "../book/Book";

export default function BooksList2({ booksList }) {
  const { books, status, currentPage, totalPages, limit } = useSelector(
    (state) => state.books
  );
  const dispatch = useDispatch();

  // Gọi API để lấy sách của trang hiện tại
  

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage)); // Cập nhật trang
  };

  return (
    <>
      <div className="container w-full mx-auto px-2 mb-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {booksList.map((book) => (
            <Book 
            key={book.id} 
            book={book} 
            
            />
          ))}
        </div>
      </div>
    </>
  );
}
