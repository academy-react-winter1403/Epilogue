
import React from "react";
import { Link } from "react-router-dom";
 const CardList = ({sortedCards,currentCards}) => {

  return (
    <div className="w-screen h-auto flex-col   md:grid grid-cols-3 gap-[32px] w-[971px]">
      {sortedCards.length > 0 ? (
        sortedCards.map((card, index) => (
          <div key={index} className="card w-[322px] h-[366px] flex flex-col">
            <div className="w-[322px] h-[293px] rounded-[32px]  flex flex-col p-4 relative text-[#FCFCFC]">
              <div className="absolute top-6 right-7 flex gap-2">
                <div className="w-[89px] h-[24px] bg-[#FF37F5] text-nowrap text-center font-medium text-sm rounded-[32px] text-[#FCFCFC]">
                  <h3>{card.levelName}</h3>
                </div>
                <div className="w-[89px] h-[24px] bg-[#3772FF] text-center font-medium text-sm rounded-[32px] ml-2">
                  <h3>{card.technologyList && card.technologyList.split(",")[0]?.trim()}</h3>
                </div>
              </div>
              <img
                src={card.tumbImageAddress || "https://img.freepik.com/free-vector/404-error-template-flat-style_23-2147757271.jpg"}
                alt={card.title}
                className="w-full h-full rounded-[32px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "path/to/default/image.jpg"; 
                }}
              />
            </div>
            <div className="w-[302px]  pr-5 flex flex-col">
          <Link to={"/course-details/" + card.courseId}>
          <h1 className="text-2xl  cursor-pointer font-bold">{card.title || "بدون عنوان"}</h1>
          
          </Link>

              <div className="flex justify-between items-center mt-2">
                <h2 className="font-medium text-[#707070]">{card.teacherName || "ناشناس"}</h2>
                <div className="flex">
                  <h3 className="font-bold text-base">{card.cost ? `${card.cost.toLocaleString()}` : "رایگان"}</h3>
                  <span className="text-sm font-medium">{card.cost ? "تومان" : ""}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-3 text-center">کارتی برای نمایش وجود ندارد.</div>
      )}
    </div>
  );
};
export default CardList