import { useState, useRef, useEffect } from "react";
import React from "react";
import useStore from "../../core/Store/Zustand-Store";
import gsap from "gsap";
import { Calendar03Icon } from "../common/Icons/Calender";
import { Cancel01Icon } from "../common/Icons/Cancel";


const Sorting = () => {
  const { setSortCol, setSortType } = useStore((state) => state);
  const [activeSort, setActiveSort] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const isDragging = useRef(false);
  const startPosition = useRef(0);

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

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startPosition.current = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const delta = startPosition.current - e.clientY;
    startPosition.current = e.clientY;

    const newHeight = Math.max(300, modalRef.current.offsetHeight - delta);
    modalRef.current.style.height = `${newHeight}px`;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div>
      <div className="hidden md:block">
        <div className="flex items-center justify-center mt-[72px]">
          <span className="font-bold mt-1.5 ml-4 text-xl">ترتیب</span>
          <div className="flex gap-2  ">
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
                 {activeSort === option.type && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSortClick(option);
                    }}
                    className=""
                    aria-label="حذف"
                  >
                    <div className="px-2">
                      <Cancel01Icon width={"20px"}  color={"#FF5353"}/>
                    

                    </div>
                  </button>
                )}
                {option.label}
               
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-[110px] pt-[63px] md:hidden">
        <button className="w-[95px] h-[48px] bg-[#2F2F2F] rounded-[40px] text-white">فیلتر</button>
        <button className="w-[95px] h-[48px] bg-[#2F2F2F] rounded-[40px] text-white">ترتیب</button>
      </div>

  
    </div>
  );
};

export default Sorting;