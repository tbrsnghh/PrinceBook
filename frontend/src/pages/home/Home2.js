import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../layout/default/DefaultLayout"; // Import layout
import Banner from "../../components/banner/BannerTest";
import BooksList from "../../components/booksList/BooksList";
import { getBookLimitItems, getBooks } from "../../store/booksSlice";
import Categories2 from "../../components/categories/Categories2";
import "./home.scss";
import BooksList2 from "../../components/booksList/BooksList copy";
import Pagination from "../../components/booksList/Pagination";
import SpecificCategory from "../specificCategory/SpecificCategory";
import SpecificCategory2 from "../specificCategory/SpecificCategory2";

export default function Home2() {
  const { books, status, totalPages, limit } = useSelector(
    (state) => state.books
  );  
  const dispatch = useDispatch();
  const [currentPage, setPage] = useState(0);

  useEffect(() => {
    // dispatch(getBooks());
    dispatch(getBookLimitItems({ page: currentPage, size: limit }));
  }, [dispatch, currentPage, limit]);

  const onPageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  }
  const renderHomeContent = () => {
    return (
      <div className="w-full my-4">
        <Banner/>
        <div className="flex">
        <div className="w-1/5">
          <Categories2 />
        </div>
        <div className="w-4/5 hide-scrollbar">
        
          {books ? (
            // <BooksList booksList={books} />
            <BooksList booksList={books} />
            
          ) : (
            <p>Loading books...</p>
          )}{" "}
          {window.scrollTo(0, 0)}
          <Pagination currentPage={currentPage} totalPages={totalPages}
          onPageChange={onPageChange}/>
        </div>
        </div>

       
        <SpecificCategory2 categoryname="Khoa học" />
        
        {/* <SpecificCategory2 categoryname="Viễn tưởng" /> */}
      </div>
      
    );
  };

  return <DefaultLayout children={renderHomeContent()} />;
}
