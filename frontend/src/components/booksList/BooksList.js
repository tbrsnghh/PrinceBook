import React from 'react'
import Book from '../book/Book'

export default function BooksList({booksList}) {
  return (
    <>
        {
            booksList.map((book) => (
                <Book key={book.id} book={book}/>
            ))
        }
    </>
  )
}
