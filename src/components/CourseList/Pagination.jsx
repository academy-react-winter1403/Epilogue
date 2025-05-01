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
        className={`mx-1 px-4 py-3 rounded-lg ${
          currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-black"
        }`}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`mx-1 px-4 py-3 rounded-lg ${
              currentPage === pageNumber
                ? "bg-blue-500 text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`mx-1 px-4 py-3 rounded-lg ${
          currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-black"
        }`}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;