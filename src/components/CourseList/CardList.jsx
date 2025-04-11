
import React from "react";
 const CardList = ({sortedCards,currentCards}) => {

  return (
    <div className="w-screen h-auto grid grid-col  md:grid grid-cols-2 lg:gap-[30px] lg:grid-cols-3 gap-[32px] ">
      {sortedCards.length > 0 ? (
        sortedCards.map((card, index) => (
          <div key={index} className="card w-[322px] h-[366px] flex flex-col">
            <div className="w-[302px] h-[293px] rounded-[32px] flex flex-col p-4  relative text-[#FCFCFC]">
              <div className="absolute top-4 px-4 py-2 gap-1 flex">
                <div className="w-[89px] h-[24px] bg-[#FF37F5] text-nowrap flex items-center justify-center  text-sm rounded-[32px] text-[#FCFCFC]">
                  <h3>{card.levelName}</h3>
                </div>
                <div className="w-[89px] h-[24px] bg-[#3772FF]  flex items-center justify-center  font-medium text-sm rounded-[32px] ml-2">
                  <h3>{card.technologyList && card.technologyList.split(",")[0]?.trim()}</h3>
                </div>
              </div>
              <img
                src={card.tumbImageAddress || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTO8H6mRVR83mbxemvDIPW8rbiLZ1b8XVl6Q&s"}
                alt={card.title}
                className="w-full h-[293px] rounded-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTO8H6mRVR83mbxemvDIPW8rbiLZ1b8XVl6Q&s"; 
                }}
              />
            </div>
            <div className="w-[302px] bg-white p-4 flex flex-col">
              <h1 className="text-2xl font-bold">{card.title || "بدون عنوان"}</h1>
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