import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/categoriesSlice";
import { Link } from "react-router-dom";

export default function Categories2() {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64">
      <p className="text-md font-bold mb-4">Danh mục</p>
      <div className="border-t border-gray-200">
        {categories.map((category, index) => (
          <Link to={`/category/${category.id}`} key={index}>
            <div
              
              className="flex justify-between items-center py-2 border-b border-gray-100"
            >
              <button className="text-sm">{category.name}</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
