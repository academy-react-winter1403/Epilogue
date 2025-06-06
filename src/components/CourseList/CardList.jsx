import React from "react";
import { Link } from "react-router-dom";

const CardList = ({ sortedCards, currentCards }) => {
  const cards = sortedCards.length > 0 ? sortedCards : currentCards;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative w-full aspect-[322/293] rounded-[32px] overflow-hidden">
              <img
                src={
                  card.tumbImageAddress ||
                  "https://img.freepik.com/free-vector/404-error-template-flat-style_23-2147757271.jpg"
                }
                alt={card.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://img.freepik.com/free-vector/404-error-template-flat-style_23-2147757271.jpg";
                }}
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="bg-[#FF37F5] text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                  {card.levelName}
                </span>
                <span className="bg-[#3772FF] text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                  {card.technologyList?.split(",")[0]?.trim() || "دسته‌بندی"}
                </span>
              </div>
            </div>

            <div className="pt-4 px-1 flex flex-col">
              <Link to={`/course-details/${card.courseId}`}>
                <h1 className="text-base font-bold mb-2">{card.title || "بدون عنوان"}</h1>
              </Link>

              <div className="flex justify-between items-center text-sm">
                <span>{card.teacherName || "ناشناس"}</span>
                <span className="font-bold">
                  {card.cost ? `${card.cost.toLocaleString()} تومان` : "رایگان"}
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-3 text-center text-gray-600">
          کارتی برای نمایش وجود ندارد.
        </div>
      )}
    </div>
  );
};

export default CardList;
