import React from "react";

const Pagination = ({ totalPages, currentPage, setPageNumber }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPageNumber(page);
    }
  };

  return (
    <div className="flex justify-center mb-10">

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`mx-1 px-3 py-2 rounded ${
          currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-gray-200 text-black"
        }`}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`mx-1 px-3 py-2 rounded ${
            currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`mx-1 px-3 py-2 rounded ${
          currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-gray-200 text-black"
        }`}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;