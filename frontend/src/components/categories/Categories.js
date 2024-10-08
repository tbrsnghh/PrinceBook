import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories({ categories }) {
  return (
    <div className="absolute top-7 z-10 bg-white border border-gray-300 rounded-lg shadow-lg p-2 w-96">  
      {categories.length > 0 ? (  
        categories.map((category, index) => (  
          <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">  
            <Link to={`/categories/${category.id}`}>{category.name}</Link>  
          </div>  
        ))  
      ) : (  
        <div className="p-2">No categories available.</div>  
      )}  
    </div> 
  )
}