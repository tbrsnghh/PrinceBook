import React from "react";
import './header.scss'
export default function Header() {
  return (
    <div className="border-b border-gray-300 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i className="pattern-icon fas fa-home text-2xl"></i>
          
          <div className="text-2xl font-bold">Book Store</div>
          <i className="pattern-icon fas fa-th-list text-2xl"></i>
        </div>
        <div className="flex space-x-4 text-2xl">
          <i className="pattern-icon fas fa-search"></i>
          <i className="pattern-icon fas fa-shopping-cart"></i>
          <i className="pattern-icon fas fa-bell"></i>
          <i className="pattern-icon fas fa-user"></i>
        </div>
      </div>
    </div>
  );
}
