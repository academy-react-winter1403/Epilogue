import React from "react";
import { ViewIcon } from "../../Icons/ViewIcon";
import dateModifier from "../../../../core/utils/dateModifier";
import { useQuery } from "@tanstack/react-query";
import { getReservedCourses } from "../../../../core/services/api/Dashboard/myCourseReserve";

const ReservedCoursesTable = () => {
  const { data: courseReserved } = useQuery({
    queryKey: ["courseReserved"],
    queryFn: getReservedCourses,
  });
  console.log(courseReserved, "courseReserved : ");
  return (
    <div className="mt-4 px-4 lg:px-4 lg:mt-5 text-[#707070] overflow-auto">
      <div className="bg-[#F1F1F1] rounded-[16px] gap-[30px] p-3 flex text-sm font-yekan-600 text-nowrap">
        <p className=" w-[100px]">#</p>
        <p className=" w-[90px]">نام</p>
        <p className=" w-[100px]">مدرس</p>
        <p className=" w-[120px]">تاریخ برگزاری</p>
        <p className=" w-[40px]"></p>
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
              className="flex items-center gap-[30px] py-[22px] text-nowrap text-sm"
            >
              <div>
                <img
                  src={item.tumbImageAddress}
                  className="min-w-[83px] h-[52px] border rounded-[12px] object-cover"
                />
              </div>
              <p className="w-[100px] truncate font-yekan-600">{item.courseName}</p>
              <p className="w-[110px]  font-yekan-600">{item.studentName}</p>
              <p className="w-[90px] font-yekan-600">{dateModifier(item.reserverDate)}</p>
              <div className="w-[50px] pl-4">
                <ViewIcon width={24} height={24} />
              </div>
            </div>
          ))
        )}{" "}
      </div>
    </div>
  );
};

export default ReservedCoursesTable;
