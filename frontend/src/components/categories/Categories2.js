import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/categoriesSlice";
import { Link, useNavigate } from "react-router-dom";
import { getBooksByCategory } from "../../store/booksSlice";

export default function Categories2() {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const navigate = useNavigate();
  const toCategory = (category) => {
    navigate(`/category/${category}`);
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64">
      <p className="text-md font-bold mb-4">Danh mục</p>
      <div className="border-t border-gray-200">
        {categories.map((category, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-gray-100"
            >
              <button className="text-sm" onClick={() => toCategory(category.name)}>{category.name}</button>
            </div>
        ))}
      </div>
    </div>
  );
}
