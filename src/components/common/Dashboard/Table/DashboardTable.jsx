import React, { useEffect, useState } from "react";
import { ViewIcon } from "../../Icons/ViewIcon";
import dateModifier from "../../../../core/utils/dateModifier";
import { getMyCourses } from "../../../../core/services/api/Dashboard/dashborad";
import { useQuery } from "@tanstack/react-query";
import { Invoice03Icon } from "../../Icons/PaymentIcon";

const DashboardTable = ({ showIcon,searchTerm }) => {
  const { data: myCourses } = useQuery({
    queryKey: ["myCourses"],
    queryFn: getMyCourses,
  });

  const [filteredCourses, setfilteredCourses] = useState([]);
  
    useEffect(() => {
      if (myCourses?.listOfMyCourses) {
        const term = searchTerm.toLowerCase();
        const newFilteredCourses = myCourses.listOfMyCourses.filter(course =>
          course.termName.toLowerCase().includes(term) 
        );
        setfilteredCourses(newFilteredCourses);
      }
    }, [myCourses, searchTerm]);
  
  return (
    <div className="mt-4 px-4 lg:px-4 lg:mt-5  overflow-auto">
      <div className="bg-[#F1F1F1] text-[#707070] rounded-[16px] gap-[30px] p-3 flex text-sm font-yekan-600 text-nowrap">
        <p className=" w-[10%]">#</p>
        <p className=" w-[19%]">نام</p>
        <p className=" w-[19%]">مدرس</p>
        <p className=" w-[19%]">تاریخ برگزاری</p>
        <p className=" w-[19%]">سطح</p>
      </div>

      <div className="overflow-y-auto">
        {filteredCourses?.length === 0 ? (
          <p className="flex items-center justify-center py-16">
            دوره ای وجود ندارد
          </p>
        ) : (
          filteredCourses?.map((item) => (
            <div
              key={item.courseId}
              className="flex items-center gap-[30px] py-[22px] text-nowrap text-sm text-black"
            >
              <div>
                <img
                  src={item.tumbImageAddress||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7cNMHJHD_Va2Kzvp38Arpv6Kyyi2Nfiw4g&s"}
                  className="min-w-[83px] h-[52px]  rounded-[12px] object-cover"
                />
              </div>
              <div className="w-[37%]  font-yekan-600">{item.termName}</div>
              <div className="w-[45%] font-yekan-600">{item.fullName}</div>
              <div className="w-[35%] font-yekan-600">
                {dateModifier(item.lastUpdate)}
              </div>
              <div className="w-[20%]  px-2 py-1 flex items-center justify-center bg-[#FF37F5] rounded-3xl text-white text-[14px]">
                {item.levelName}
              </div>
              <div className="mr-[20px] flex px-2 gap-2">
                {showIcon && <Invoice03Icon color={"#29CC7A"} />}
                <ViewIcon width={24} height={24} cursor={"pointer"} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardTable;
