import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Notifications from "../notifications/Notifications";
import Categories from "../categories/Categories";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu state

  const notifications = [
    "New comment on your post",
    "New follower: John Doe",
    "Your order has been shipped",
  ]; 

  const categories = [
    "Fiction",
    "Non-fiction",
    "Science Fiction",
    "Mystery",
    "Romance",
    "Fantasy",
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleMouseClickCategories = () => {
    setShowCategories(!showCategories);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-300 w-full fixed top-0 z-10 shadow-md">
      <div className="container p-2 mx-auto flex justify-between items-center">
        {/* Logo and Categories */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">
            <Link to="/">Prince Books</Link>
          </div>
          <div className="relative items-center hidden md:flex" 
          onClick={handleMouseClickCategories}
          onMouseLeave={() => setShowCategories(false)}>
            <button className="pattern-icon ml-4" >
              <i className="fas fa-th-list text-2xl"></i>
              <span className="ml-2">Categories</span>
            </button>
            {showCategories && <Categories categories={categories} />}
          </div>
        </div>

        {/* Search and Icons */}
        <div className="hidden sm:flex space-x-4 text-lg items-center">
          <form className="flex border border-gray-200 rounded-lg" onSubmit={handleSearchSubmit}>
            <input
              className="p-1 mx-1 w-full focus:outline-none"
              type="text"
              placeholder="Search"
              onChange={handleSearchChange}
            />
            <button className="p-1 button-2" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>

          {/* Notifications */}
          <div
            className="relative"
            onMouseEnter={() => setShowNotifications(true)}
            onMouseLeave={() => setShowNotifications(false)}
          >
            <button onClick={toggleNotifications} className="pattern-icon">
              <i className="fas fa-bell"></i>
            </button>
            {showNotifications && <Notifications notifications={notifications} />}
          </div>

          {/* Cart & User */}
          <Link to={"/cart"} className="pattern-icon">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <Link to={"/account"} className="pattern-icon">
            <i className="fas fa-user"></i>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg
              className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">
            Home
          </Link>
          <Link to="/categories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">
            Categories
          </Link>
          <Link to="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">
            Cart
          </Link>
          <Link to="/account" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white">
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
}
