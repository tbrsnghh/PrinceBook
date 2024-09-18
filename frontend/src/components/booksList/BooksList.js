import React from 'react';  
import Book from '../book/Book';  

export default function BooksList({ booksList }) {  
  return (  
    <>  
      <div className="container w-full max-w-7xl mx-auto px-4 mb-10">    
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">   
          {booksList.map((book) => (  
            <Book key={book.id} book={book} />  
          ))}  
        </div>  
      </div>  
    </>  
  );  
}