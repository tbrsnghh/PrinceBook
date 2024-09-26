import React from "react";
import "./pagination.scss";
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  // const handlePrevious = () => {
  //   if (currentPage > 1) {
  //     onPageChange(currentPage - 1);
  //   }
  // };

  // const handleNext = () => {
  //   if (currentPage < totalPages) {
  //     onPageChange(currentPage + 1);
  //   }
  // };

  return (
    <div className="join">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          className={`join-item btn ${currentPage === i ? "btn-active" : ""}`}
          onClick={() => onPageChange(i)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
