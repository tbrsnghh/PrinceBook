import React from 'react'

export default function Categories({ categories }) {
  return (
    <div className="absolute top-10 z-10 bg-white border border-gray-300 rounded-lg shadow-lg p-2 w-96">  
      {categories.length > 0 ? (  
        categories.map((category, index) => (  
          <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">  
            {category}  
          </div>  
        ))  
      ) : (  
        <div className="p-2">No categories available.</div>  
      )}  
    </div> 
  )
}