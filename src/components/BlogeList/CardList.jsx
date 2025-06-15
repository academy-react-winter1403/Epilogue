import { ViewIcon } from "../common/Icons/ViewIcon";
import dateModifier from "../../core/utils/dateModifier";
import React from "react";
import { Calendar03Icon } from "../common/Icons/Calender";
import { Link } from "react-router-dom";

const CardList = ({ sortedCards, currentCards }) => {
  const cards = sortedCards.length > 0 ? sortedCards : currentCards;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full ">
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col mt-5 md:mt-0 w-full max-w-md mx-auto"
          >
            <div className="relative w-full max-w-[499px] aspect-[499/293] rounded-[32px] overflow-hidden">
              <img
                src={
                  card.addUserProfileImage ||
                  "https://kinsta.com/wp-content/uploads/2022/11/react-best-practices.jpg"
                }
                alt={card.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://kinsta.com/wp-content/uploads/2022/11/react-best-practices.jpg";
                }}
              />
            </div>

            <div className="p-4 flex flex-col w-full">
              <Link to={`/news-details/${card.id}`}>
                <h1 className="text-base font-bold truncate">
                  {card.title || "بدون عنوان"}
                </h1>
              </Link>

              <div className="flex items-center justify-between flex-row gap-2 w-full">
                <h2 className="text-[#707070] text-[14px] font-medium truncate  ">


                  {card.addUserFullName || "ناشناس"}
                </h2>


                <div className="flex flex-row gap-3 ">
                  <div className="flex items-center gap-1 text-[14px] text-[#707070] font-yekan-500">
                    {dateModifier(card.insertDate)}
                    <Calendar03Icon width="18px" height="18px" />
                  </div>
                  <div className="flex items-center gap-1 text-[14px] text-[#707070] font-yekan-500">


                    {card.currentView}
                    <ViewIcon width="18px" height="18px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-600">
          کارتی برای نمایش وجود ندارد.
        </div>
      )}
    </div>
  );
};

export default CardList;
