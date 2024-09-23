import React from 'react'
import { Navigate } from 'react-router-dom';
export default function ProtectedRoute({ children }) {
    const user = JSON.parse(localStorage.getItem('user')); // Lấy thông tin người dùng từ localStorage

  if (!user) {
    // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
    return <Navigate to="/account" />;
  }

  if (user.role !== "ADMIN") {
    // Nếu không phải admin, chuyển hướng đến trang không có quyền
    return <Navigate to="/notfound" />;
  }
  return children;
  
  
}
