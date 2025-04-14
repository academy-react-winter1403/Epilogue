import React from "react";
import { ViewIcon } from "../../common/Icons/ViewIcon";
import dateModifier from "../../../core/utils/dateModifier";
import { useQuery } from "@tanstack/react-query";
import { Cancel01Icon } from "../../common/Icons/Cancel";
import { BookDownloadIcon } from "../../common/Icons/Book-downloadIcon";
import { getFavoriteCourses } from "../../../core/services/api/Dashboard/dashborad";

const CourseFavTable = () => {
  const { data: favoriteCourses } = useQuery({
    queryKey: ["favoriteCourses"],
    queryFn: getFavoriteCourses,
  });
  console.log(favoriteCourses, "favoriteCourses : ");
  return (
    <div className="mt-4 px-4 lg:px-4 lg:mt-5  overflow-auto">
      <div className="bg-[#F1F1F1] text-[#707070] rounded-[16px] gap-[30px] p-3 flex text-sm font-yekan-600 text-nowrap">
        <p className=" w-[10%]">#</p>
        <p className=" w-[19%]">نام</p>
        <p className=" w-[15%]">مدرس</p>
        <p className=" w-[18%]">تاریخ برگزاری</p>
        <p className=" w-[10%]">سطح</p>
      </div>

      <div className=" overflow-y-auto">
        {favoriteCourses?.favoriteCourseDto.length === 0 ? (
          <p className="flex items-center justify-center py-16">
            دوره ای وجود ندارد
          </p>
        ) : (
          favoriteCourses?.favoriteCourseDto.map((item) => (
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
              <p className="w-[17%] truncate font-yekan-600">
                {item.courseTitle}
              </p>
              <p className="w-[17%] truncate  font-yekan-600">
                {item.levelName}
              </p>
              <p className="w-[33%] font-yekan-600">
                {dateModifier(item.lastUpdate)}
              </p>
              <div className="gap-2 pl-4 flex flex-row">
              <ViewIcon width={24} height={24} cursor={"pointer"} />
              <BookDownloadIcon color={"#707070"} />
                <Cancel01Icon color={"#FF5353"} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CourseFavTable;
