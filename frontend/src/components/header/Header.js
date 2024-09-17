import React from "react";

export default function Header() {
  return (
    <div className="border-b border-gray-300 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">Book Store</div>
          <i className="fas fa-th-list text-2xl"></i>
          <i className="fas fa-home text-2xl"></i>
        </div>
        <div className="flex space-x-4 text-2xl">
          <i className="fas fa-search"></i>
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-user"></i>
          <i className="fas fa-bell"></i>
        </div>
      </div>
    </div>
  );
}
