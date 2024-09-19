import React from 'react'
import BookDetailComp from '../../components/bookDetail/BookDetailComp'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

export default function BookDetailPage() {
  return (
    <div className='relative'>
        <div className=''>
          <Header/>
        </div>
        <div className='mt-16'>
          <BookDetailComp/>
          <Footer/>
        </div>
    </div>
  )
}


