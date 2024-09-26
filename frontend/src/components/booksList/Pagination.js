import React from "react";
import "./pagination.scss";
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages -1 ) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="join">
      <button className="join-item btn" onClick={handlePrevious}>
      Previous
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`join-item btn ${currentPage === i  ? "btn-active" : ""}`}
          onClick={() => onPageChange(i)}
        >
          {i + 1}
        </button>
      ))}
      <button className="join-item btn" onClick={handleNext}>
          Next
      </button>
    </div>
  );
}

