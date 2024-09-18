import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/BannerTest'
import Footer from '../../components/footer/Footer'
import Book from '../../components/book/Book'
import BooksList from '../../components/booksList/BooksList'
import {getBooks} from '../../store/booksSlice'


export default function Home() {
    const {books, status, error} = useSelector(state=>state.books)
    const dispatch = useDispatch()

    useEffect(() => {
        if(status === 'idle'){
            dispatch(getBooks())
        }
    }, [status, dispatch])
  return (
    <>
      <Header/>
      <Banner/>
      <BooksList booksList={books}/>
      <Footer/>
    </>
  )
}

