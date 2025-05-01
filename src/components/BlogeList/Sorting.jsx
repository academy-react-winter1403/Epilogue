import { useState, useEffect, useRef } from "react";
import React from "react";
import cancel from "../../assets/cancel.png";
import useStore from "../../core/Store/Zustand-Store";
import gsap from "gsap";
import sorting from '../../assets/sorting.png'
import SortModal from "./SortModal/SortModal";

const Sorting = () => {
  const { setSortCol, setSortType } = useStore((state) => state);
  const [activeSort, setActiveSort] = useState(null);
  const modalRef = useRef(null);

  const sortOptions = [
    { type: "newest", label: "جدیدترین", col: "insertDate", order: "Asc" },
    { type: "popular", label: "محبوب‌ترین", col: "currentLikeCount", order: "DESC" },
  ];

  const handleSortClick = (option) => {
    const newSort = activeSort === option.type ? null : option.type;
    setActiveSort(newSort);
    setSortCol(newSort ? option.col : null);
    setSortType(newSort ? option.order : null);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // تغییر وضعیت مودال
  };

  return (
    <div>

      <div className="hidden md:block">
        <div className="flex items-center justify-center mt-[72px]">
          <span className="font-bold mt-1.5 ml-4 text-xl">ترتیب</span>
          <div className="flex gap-2">
            {sortOptions.map((option) => (
              <div
                key={option.type}
                onClick={() => handleSortClick(option)}
                className={`border rounded-full h-10 w-[110px] themed-dash-input flex items-center px-4 text-lg font-medium cursor-pointer ${
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

      <div className="flex gap-[110px] pt-[63px] md:hidden">
        <button onClick={toggleModal} className="w-[95px] h-[48px] bg-[#2F2F2F] rounded-[40px] text-white">فیلتر</button>
        <button className="w-[95px] h-[48px] bg-[#2F2F2F] rounded-[40px] text-white">ترتیب</button>
      </div>
      {/* <SortModal isOpen={isModalOpen} onClose={toggleModal} /> */}
    </div>
  );
};

export default Sorting;