// Notifications.js  
import React from "react";  

const Notifications = ({ notifications }) => {  
  return (  
    <div className="absolute container right-0 mt-1 p-4 w-64 bg-white border border-gray-200 shadow-lg rounded-lg">  
      <ul className="max-h-48 overflow-y-auto">  
        {notifications.length === 0 ? (  
          <li className="p-2">No notifications</li>  
        ) : (  
          notifications.map((notification, index) => (  
            <li key={index} className="p-2 border-b border-gray-200">  
              {notification}  
            </li>  
          ))  
        )}  
      </ul>  
    </div>  
  );  
};  

export default Notifications;