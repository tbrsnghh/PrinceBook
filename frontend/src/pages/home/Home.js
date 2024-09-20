import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../layout/default/DefaultLayout"; // Import layout
import Banner from "../../components/banner/BannerTest";
import BooksList from "../../components/booksList/BooksList";
import { getBooks } from "../../store/booksSlice";

export default function Home() {
  const { books, status, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  // Gọi API để lấy danh sách sách
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const renderHomeContent = () => {
    return (
      <>
        <Banner />
        <h1 className="text-3xl font-bold mb-4">Home</h1>
        {books ? <BooksList booksList={books} /> : <p>Loading books...</p>}{" "}
      </>
    );
  };

  return <DefaultLayout children={renderHomeContent()} />;
}
