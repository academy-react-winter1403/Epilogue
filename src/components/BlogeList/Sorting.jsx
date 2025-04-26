import { useState, useEffect, useRef } from "react";
import React from "react";
import cancel from "../../assets/cancel.png";
import useStore from "../../core/Store/Zustand-Store";
import gsap from "gsap";
import sorting from '../../assets/sorting.png'

const Sorting = () => {
  const { setSortCol, setSortType } = useStore((state) => state);
  const [activeSort, setActiveSort] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  useEffect(() => {
    if (isModalOpen) {
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.6,
      ease: "power3.in",
      onComplete: () => setIsModalOpen(false),
    });
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
                className={`border rounded-full h-10 w-[110px] flex items-center px-4 text-lg font-medium cursor-pointer ${
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


      <div className="block md:hidden">
        <div
          className="w-[95px] h-[48px] rounded-[40px] bg-[#2F2F2F] text-[#FCFCFC] flex cursor-pointer flex items-center justify-center"
          onClick={openModal}
        >
          <img src={sorting}/>
          <span>ترتیب</span>
        </div>

        {isModalOpen && (
          <div
            ref={modalRef}
            className="fixed bottom-0 left-0 w-full h-full bg-transparent z-50 flex justify-center items-end"
          >
            <div
              className="bg-white p-4 rounded-xl relative shadow-lg"
              style={{
                width: "100%",
                border: "1px solid #ccc",
                maxHeight: "90%",
              }}
            >

              <div
                className="w-[80px] h-[4px] bg-gray-500 mx-auto mt-2 cursor-grab"
              ></div>
              <div
                className="absolute top-6 left-6 cursor-pointer border border-red-500 p-1 rounded-md flex text-red-500"
                onClick={closeModal}
              >
                <img src={cancel} alt="بستن" />
                <span className="ml-2">ترتیب</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg">مرتب‌سازی</span>
              </div>
              <div className="flex gap-2">
                {sortOptions.map((option) => (
                  <div
                    key={option.type}
                    onClick={() => handleSortClick(option)}
                    className={`border rounded-full h-10 w-[110px] flex items-center px-4 text-sm font-medium cursor-pointer ${
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
        )}
      </div>
    </div>
  );
};

export default Sorting;