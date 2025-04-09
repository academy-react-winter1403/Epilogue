import { useState } from "react";
import React from "react";
import cancel from "../../assets/cancel.png";
import useStore from "../../core/Store/Zustand-Store";

const Sorting = () => {
  const { setSortCol, setSortType } = useStore((state) => state); // مدیریت ستون و نوع مرتب‌سازی با Zustand
  const [activeSort, setActiveSort] = useState(null); // ذخیره گزینه مرتب‌سازی فعال

  const sortOptions = [
    { type: "cheap", label: "ارزان‌ترین", col: "Cost", order: "ASC" },
    { type: "expensive", label: "گران‌ترین", col: "Cost", order: "DESC" },
    { type: "newest", label: "جدیدترین", col: "lastUpdate", order: "DESC" },
    { type: "popular", label: "محبوب‌ترین", col: "currentLikeCount", order: "DESC" },
  ];

  const handleSortClick = (option) => {
    const newSort = activeSort === option.type ? null : option.type; 
    setActiveSort(newSort);
    setSortCol(newSort ? option.col : null);
    setSortType(newSort ? option.order : null);
  };

  return (
    <div>
      {/* حالت عادی */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center mt-[72px]">
          <span className="font-bold mt-1 ml-2 text-xl">مرتب‌سازی</span>
          <div className="flex gap-6">
            {sortOptions.map((option) => (
              <div
                key={option.type}
                onClick={() => handleSortClick(option)}
                className={`border rounded-full h-10 flex items-center px-4 text-lg font-medium cursor-pointer ${
                  activeSort === option.type
                    ? "border-[#FF5353] text-[#FF5353]"
                    : "border-gray-300 text-black"
                }`}
              >
                {option.label}
                {activeSort === option.type && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSortClick(option);
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
      </div>

      {/* حالت ریسپانسیو */}
      <div className="block md:hidden">
        <div
          className={`${
            activeSort
              ? "w-[300px] h-auto border border-[#DCDCDC] rounded-3xl p-4 bg-white"
              : "w-[120px] h-[40px] rounded-[40px] bg-gray-200 cursor-pointer flex items-center justify-center"
          }`}
        >
          {!activeSort && <span>مرتب‌سازی</span>}
          {activeSort && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg">مرتب‌سازی</span>
                <button
                  className="border px-4 py-1 rounded-full bg-gray-100"
                  onClick={() => setActiveSort(null)}
                >
                  بستن
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {sortOptions.map((option) => (
                  <div
                    key={option.type}
                    onClick={() => handleSortClick(option)}
                    className={`border rounded-full h-10 flex items-center px-4 text-sm font-medium cursor-pointer ${
                      activeSort === option.type
                        ? "border-[#FF5353] text-[#FF5353]"
                        : "border-gray-300 text-black"
                    }`}
                  >
                    {option.label}
                    {activeSort === option.type && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSortClick(option);
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Sorting;