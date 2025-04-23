
import React from "react";

const Pagination = ({ totalPages, currentPage, setPageNumber }) => {
  return (
    <div className="flex justify-center mt-10">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setPageNumber(index + 1)}
          className={`mx-1 px-3 py-2 rounded ${
            currentPage === index
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;