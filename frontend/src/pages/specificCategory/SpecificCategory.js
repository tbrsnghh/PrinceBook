import React from 'react'
import { Link } from 'react-router-dom'

export default function SpecificCategory() {
  return (
    <div>
        <Link to="/">
        <button className=' bg-orange-500'>Home</button>
        </Link>
        <h1> Sách theo danh mục ở đây !</h1>
    </div>
  )
}
