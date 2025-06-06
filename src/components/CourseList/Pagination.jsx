import React from "react";
import { ArrowLeft01Icon } from "../common/Icons/ArrowLeftIcon";
import { ArrowRight01Icon } from "../common/Icons/ArrowRightIcon";

const Pagination = ({ totalPages, currentPage, setPageNumber }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPageNumber(page);
    }
  };

  return (
    <div className="flex justify-center py-10">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={` px-3 py-3 rounded-tr-[16px] rounded-br-[16px] ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500"
            : "bg-gray-200 text-black"
        }`}
        disabled={currentPage === 1}
      >
        <ArrowRight01Icon color={"#787878"} />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={` px-3 py-3  ${
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
        className={` px-3 py-3 rounded-tl-[16px] rounded-bl-[16px] ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500"
            : "bg-gray-200 text-black"
        }`}
        disabled={currentPage === totalPages}
      >
        <ArrowLeft01Icon color={"#787878"} />
      </button>
    </div>
  );
};

export default Pagination;
