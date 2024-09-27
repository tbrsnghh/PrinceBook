import React from "react";
import Book from "../book/Book";

export default function BooksList({ booksList }) {
  return (
    <>
      <div className="container w-full mx-auto px-2 mb-10">
      
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {booksList.map((book, index) => (
            <Book 
            key={book.id} 
            book={book} 
            index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
