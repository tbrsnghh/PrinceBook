import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BookItems from '../../../components/cart/BookItems'
import { Link } from 'react-router-dom'

const Result = () => {
    const {key} = useParams()
    const books = useSelector(state => state.book.list)
    const bookFilter = books.filter(book => book.name.toLowerCase().includes(key.toLowerCase()))

    return (
        <div>
            <h1>Kết quả tìm kiếm: {key}</h1>
            {bookFilter.length > 0 ? (
                <BookItems books={bookFilter} />
            ) : (
                <p>Không tìm thấy tên sách: {key}</p>
            )}
            <Link to='/'>Quay lại trang chủ</Link>
        </div>
    )
}

export default Result
