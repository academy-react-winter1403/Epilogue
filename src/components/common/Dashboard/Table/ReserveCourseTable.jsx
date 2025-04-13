import React from "react";
import { ViewIcon } from "../../Icons/ViewIcon";
import dateModifier from "../../../../core/utils/dateModifier";
import { useQuery } from "@tanstack/react-query";
import { Cancel01Icon } from "../../Icons/Cancel";
import { getReservedCourses } from "../../../../core/services/api/Dashboard/dashborad";

const ReservedCoursesTable = () => {
  const { data: courseReserved } = useQuery({
    queryKey: ["courseReserved"],
    queryFn: getReservedCourses,
  });
  console.log(courseReserved, "courseReserved : ");
  return (
    <div className="mt-4 px-4 lg:px-4 lg:mt-5  overflow-auto">
      <div className="bg-[#F1F1F1] text-[#707070] rounded-[16px] gap-[30px] p-3 flex text-sm font-yekan-600 text-nowrap">
        <p className=" w-[10%]">#</p>
        <p className=" w-[20%]">نام</p>
        <p className=" w-[20%]">مدرس</p>
        <p className=" w-[20%]">تاریخ برگزاری</p>
        <p className=" w-[10%]"></p>
      </div>

      <div className=" overflow-y-auto">
        {courseReserved?.length === 0 ? (
          <p className="flex items-center justify-center py-16">
            دوره ای وجود ندارد
          </p>
        ) : (
          courseReserved?.map((item) => (
            <div
              key={item.courseId}
              className="flex items-center gap-[30px] py-[22px] text-nowrap text-sm text-black"
            >
              <div>
                <img
                  src={item.tumbImageAddress}
                  className="min-w-[83px] h-[52px] border rounded-[12px] object-cover"
                />
              </div>
              <p className="w-[20%] truncate font-yekan-600">
                {item.courseName}
              </p>
              <p className="w-[25%] truncate  font-yekan-600">
                {item.studentName}
              </p>
              <p className="w-[30%] font-yekan-600">
                {dateModifier(item.reserverDate)}
              </p>
              <div className="gap-2  flex flex-row">
                <ViewIcon width={24} height={24} />
                <Cancel01Icon color={"#FF5353"} />
              </div>
            </div>
          ))
        )}{" "}
      </div>
    </div>
  );
};

export default ReservedCoursesTable;
