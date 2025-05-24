import { ViewIcon } from "../common/Icons/ViewIcon";
import dateModifier from "../../core/utils/dateModifier";
import React from "react";
import { Calendar03Icon } from "../common/Icons/Calender";
import { Link } from "react-router-dom";

const CardList = ({ sortedCards, currentCards }) => {
  return (
    <div className="w-screen h-auto flex-col  md:grid grid-cols-2 gap-[32px] w-[971px]">
      {sortedCards.length > 0 ? (
        sortedCards.map((card, index) => (
          <div
            key={index}
            className="card w-[322px] ml-auto mr-auto h-[365px] flex flex-col mt-5 md:mt-0 md:w-[462px]"
          >
            <div className="w-full h-[293px]  rounded-[32px] flex flex-col relative text-[#FCFCFC]">
              <img
                src={
                  card.addUserProfileImage ||
                  "https://img.freepik.com/free-vector/404-error-template-flat-style_23-2147757271.jpg"
                }
                alt={card.title}
                className="w-full h-full rounded-[32px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "path/to/default/image.jpg";
                }}
              />
            </div>
            <div className="w-[302px]  p-4 flex flex-col">
              <Link to={"/news-details/" + card.id}>
                <h1
                  className="text-2xl font-bold truncate"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
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
        <div className="col-span-3 text-center">
          کارتی برای نمایش وجود ندارد.
        </div>
      )}
    </div>
  );
};

export default CardList;
