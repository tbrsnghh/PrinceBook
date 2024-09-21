import React from 'react'
import BookDetailComp from '../../components/bookDetail/BookDetailComp'
import DefaultLayout from '../../layout/default/DefaultLayout';

export default function BookDetailPage() {
  return (
    <DefaultLayout children={<BookDetailComp />}/>
  )
}


