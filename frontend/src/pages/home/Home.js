import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../layout/default/DefaultLayout"; // Import layout
import Banner from "../../components/banner/BannerTest";
import BooksList from "../../components/booksList/BooksList";
import { getBooks } from "../../store/booksSlice";
import Categories2 from "../../components/categories/Categories2";
import "./home.scss";

export default function Home() {
  const { books, status, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  // Gọi API để lấy danh sách sách
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const renderHomeContent = () => {
    return (
      <div className="w-full my-4 flex">
        <div className="w-1/5">
          <Categories2 />
        </div>
        <div className="w-4/5 hide-scrollbar">
          {/* <Banner /> */}
          {books ? (
            <BooksList booksList={books} />
          ) : (
            <p>Loading books...</p>
          )}{" "}
        </div>
      </div>
    );
  };

  return <DefaultLayout children={renderHomeContent()} />;
}
