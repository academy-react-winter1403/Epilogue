import { useState } from "react";
import React from "react";
import cancel from "../../assets/cancel.png";

const Sorting = () => {
    const [activeSort, setActiveSort] = useState("newest");
    const [activeSorts, setActiveSorts] = useState({
      newest: true,
      popular: false,
      cheap: false,
      expensive: false,
    });
  const handleSortClick = (sortType) => {
    if (sortType === activeSort) {
      setActiveSort(null);
      setActiveSorts({
        newest: false,
        popular: false,
        cheap: false,
        expensive: false,
      });
    } else {
      setActiveSort(sortType);
      setActiveSorts({
        newest: sortType === "newest",
        popular: sortType === "popular",
        cheap: sortType === "cheap",
        expensive: sortType === "expensive",
      });
    }
  };

  const handleDeleteSort = (sortType) => {
    setActiveSorts((prev) => ({
      ...prev,
      [sortType]: false,
    }));
    setActiveSort(null);
  };


  return (
    <div>
      <div className="flex items-center justify-center mt-[72px]">
        <span className="font-bold mt-1 ml-2 text-xl">بیشتر</span>
        <div className="flex gap-2">
          {["newest", "popular", "cheap", "expensive"].map((sortType) => (
            <div
              key={sortType}
              onClick={() => handleSortClick(sortType)}
              className={`border rounded-full h-10 flex items-center px-4 text-lg font-medium cursor-pointer ${
                activeSort === sortType ? "border-[#FF5353] text-[#FF5353]" : "border-gray-300 text-black"
              }`}
            >
              {sortType === "cheap"
                ? "ارزان‌ترین"
                : sortType === "expensive"
                ? "گران‌ترین"
                : sortType === "newest"
                ? "جدیدترین"
                : "محبوب‌ترین"}
              {activeSorts[sortType] && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteSort(sortType);
                  }}
                  className="ml-2"
                  aria-label="حذف"
                >
                  <img src={cancel} alt="حذف" className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Display sorted cards here, if needed */}
    </div>
  );
};

export default Sorting;