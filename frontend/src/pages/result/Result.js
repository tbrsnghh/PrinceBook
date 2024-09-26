import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../layout/default/DefaultLayout"; // Import layout
import Banner from "../../components/banner/BannerTest";
import BooksList from "../../components/booksList/BooksList";
import { getBooks } from "../../store/booksSlice";
import Categories2 from "../../components/categories/Categories2";
import { useParams } from "react-router-dom";


export default function Results() {
  const { searchBooks } = useSelector((state) => state.books);
  const searchTerm = useParams().searchTerm;
  const dispatch = useDispatch();
  const renderResultsContent = () => {
    return (
      <div className="w-full my-4 flex">
        <div className="w-1/5">
          <Categories2 />
        </div>
        <div className="w-4/5 hide-scrollbar">
          {/* <Banner /> */}
          {searchBooks ? (
            <BooksList booksList={searchBooks} />
          ) : (
            <p>Không có sách nào tên "{searchTerm}"</p>
          )}{" "}
        </div>
      </div>
    );
  };

  return <DefaultLayout children={renderResultsContent()} />;
}