import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../layout/default/DefaultLayout"; // Import layout
import BooksList from "../../components/booksList/BooksList";

import Categories2 from "../../components/categories/Categories2";
import { useParams } from "react-router-dom";
import { getBooksByCategory } from "../../store/booksSlice";

export default function SpecificCategory2({ categoryname }) {
  const { booksByCategory, status, error } = useSelector(
    (state) => state.books
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksByCategory(categoryname));
  }, []);
  const renderHomeContent = () => {
    return (
      <div className="w-full my-4 hide-scrollbar">
        <div className="container w-full mx-auto px-2 mb-10">
          <h1 className="text-2xl font-bold mb-4">Sách {categoryname}</h1>
        </div>
        {booksByCategory && booksByCategory.length > 0 ? (
          <BooksList booksList={booksByCategory} />
        ) : (
          <p>Oops! No book found...{categoryname}</p>
        )}{" "}
      </div>
    );
  };

  return renderHomeContent();
  // <DefaultLayout children={renderHomeContent()} />;
}
