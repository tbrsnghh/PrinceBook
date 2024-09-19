import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Notifications from "../notifications/Notifications";
import Categories from "../categories/Categories";
export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const notifications = [  
    "New comment on your post",  
    "New follower: John Doe",  
    "Your order has been shipped",  
  ]; // Sample notifications  
  // Sample categories  
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
    console.log(searchTerm)
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Thực hiện tìm kiếm hoặc điều hướng đến trang kết quả tìm kiếm
    console.log("Searching for:", searchTerm);
    // Bạn có thể điều hướng hoặc thực hiện tìm kiếm ở đây
  };
  const toggleNotifications = () => {  
    setShowNotifications(!showNotifications); // Toggle notifications visibility  
  };  
  const handleMouseEnter = () => {  
    setShowNotifications(true); // Show notifications when hovering over the button  
  };  

  const handleMouseLeave = () => {  
    setShowNotifications(false); // Hide notifications when leaving the area  
  }; 

  const handleMouseClickCategories = () => {  
    setShowCategories(!showCategories); // Show categories when hovering over the button  
  };
  const handleMouseEnterCategories = () => {  
    setShowCategories(true); // Show categories when hovering over the button  
  };  

  const handleMouseLeaveCategories = () => {  
    setShowCategories(false); // Hide categories when leaving the area  
  };  
  return (
    <div className="border-b border-gray-300 py-2
                    fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">
            <Link to="/">Prince Books</Link>
          </div>
          <div className="relative"
          onMouseLeave={handleMouseLeaveCategories}>  
            <button className="pattern-icon ml-4"
            onClick={handleMouseClickCategories} 
            >  
              <i className="fas fa-th-list text-2xl"></i> {/* Icon for categories */}    
            </button> 
            <span className="ml-2"> Categories</span>
            {showCategories && <Categories categories={categories} />}  
          </div>  

        </div>
        <div className="flex space-x-4 text-lg items-center">
          <form className="flex border border-gray-200 rounded-lg" onSubmit={handleSearchSubmit}>
            <input className="p-1 mx-1 w-full focus:outline-none" type="text" placeholder="Search"  onChange={handleSearchChange}/>
            <button className="p-1 button-2" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
          
          {/* Show notifications */}
          <div className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >  
            <button onClick={toggleNotifications} className="pattern-icon">  
              <i className="fas fa-bell"></i>  
            </button>  
            {showNotifications && <Notifications notifications={notifications} />}   
          </div>  
          <Link to={"/cart"} className="pattern-icon">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <Link to={"/account"} className="pattern-icon ">
            <i className="fas fa-user"></i>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
