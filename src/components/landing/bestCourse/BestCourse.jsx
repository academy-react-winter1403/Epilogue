import React from "react";

const BestCourse = ({ data }) => {
  const { teacherName, cost, title, levelName, statusName, tumbImageAddress } =
    data;
  return (
    <>
      <div class=" max-w-[322px] md:col-span-1 col-span-4 text-black bg-white rounded-lg ">
        <div class="relative h-[293px]">
          <img
            className=" rounded-[32px] h-full"
            src={
              tumbImageAddress
                ? tumbImageAddress
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTO8H6mRVR83mbxemvDIPW8rbiLZ1b8XVl6Q&s"
            }
            alt=""
          />
          <div className=" absolute top-2 right-0 px-4 flex flex-row gap-1">
            <button className="w-[65px] h-[24px] font-yekan-500 rounded-[32px] bg-[#FF37F5] text-white text-[11px] text-nowrap">
              {levelName}
            </button>
            <button className="w-[89px] h-[24px] font-yekan-500 rounded-[32px] bg-[#3772FF] text-white text-[11px] text-nowrap">
              {statusName}
            </button>
          </div>
        </div>

        <div class="p-5 px-[0px]">
          <h5 class="mb-1 text-2xl text-nowrap font-yekan-700 font-bold tracking-tight text-gray-900">
            {title}
          </h5>

          <div className=" flex flex-row justify-between items-center">
            <p class=" text-[14px] font-yekan-500 text-[#707070] ">
              {teacherName}
            </p>
            <p class="  flex flex-row gap-1 text-gray-700 ">
              <p className="text-[16px] font-yekan-700 font-bold">{cost}</p>
              <p className="text-[14px] font-yekan-500">تومان</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestCourse;
