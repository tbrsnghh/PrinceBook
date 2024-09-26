import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../layout/default/DefaultLayout"; // Import layout
import BooksList from "../../components/booksList/BooksList";

import Categories2 from "../../components/categories/Categories2";
import { useParams } from "react-router-dom";
import { getBooksByCategory } from "../../store/booksSlice";

export default function SpecificCategory() {
  const { booksByCategory, status, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const { categoryname } = useParams();
  useEffect(() => {
    dispatch(getBooksByCategory(categoryname));
  }, [categoryname]);
  const renderHomeContent = () => {
    return (
      <div className="w-full my-4 flex">
        <div className="w-1/5">
          <Categories2 />
        </div>
        <div className="w-4/5 hide-scrollbar">
          {booksByCategory && booksByCategory.length > 0 ? (
            <BooksList booksList={booksByCategory} />
          ) : (
            <p>Oops! No book found...{categoryname}</p>
          )}{" "}

        </div>
      </div>
    );
  };

  return <DefaultLayout children={renderHomeContent()} />;
}

