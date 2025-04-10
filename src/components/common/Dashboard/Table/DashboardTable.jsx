import React from "react";
import { ViewIcon } from "../../Icons/ViewIcon";
import dateModifier from "../../../../core/utils/dateModifier";
import { getMyCourses } from "../../../../core/services/api/Dashboard/dashborad";
import { useQuery } from "@tanstack/react-query";

const DashboardTable = () => {
  const { data: myCourses } = useQuery({
    queryKey: ["myCourses"],
    queryFn: getMyCourses,
  });
  return (
    <div className="mt-4  lg:px-4 lg:mt-5 text-[#707070] overflow-auto">
      <div className="bg-[#F1F1F1]  rounded-[16px] gap-[30px] p-3 flex text-sm font-yekan-600 text-nowrap">
        <p className=" w-[120px]">#</p>
        <p className=" w-[90px]">دوره</p>
        <p className=" w-[100px]">مدرس</p>
        <p className=" w-[120px]">تاریخ برگزاری</p>
        <p className=" w-[85px]">سطح</p>
        <p className=" w-[35px]"></p>
      </div>

      <div className="overflow-y-auto">
        {myCourses?.listOfMyCourses.length === 0 ? (
          <p className="flex items-center justify-center py-16">
            دوره ای وجود ندارد
          </p>
        ) : (
          myCourses?.listOfMyCourses.map((item) => (
            <div
              key={item.courseId}
              className="flex items-center gap-[100px] md:gap-[50px] py-[22px] text-nowrap text-sm"
            >
              <div>
                <img
                  src={item.tumbImageAddress}
                  className="min-w-[83px] h-[52px] border rounded-[12px] object-cover"
                />
              </div>
              <div className="w-[120px]  font-yekan-600">{item.termName}</div>
              <div className="w-[120px] font-yekan-600">{item.fullName}</div>
              <div className="w-[100px] font-yekan-600">{dateModifier(item.lastUpdate)}</div>
              <div className="w-[120px] px-2 py-1 flex items-center justify-center bg-[#FF37F5] rounded-3xl text-white text-[14px]">
                {item.levelName}
              </div>
              <div className="w-[190px] pl-4">
                <ViewIcon width={24} height={24} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardTable;
