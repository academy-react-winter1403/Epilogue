import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React from "react";
import { ViewIcon } from "../../Icons/ViewIcon";

const DashboardTable = ({ courses }) => {
  return (
    <div>
        <div className="bg-[#F1F1F1] rounded-[16px] text-[#707070]">
          <div className="gap-[30px] p-3 flex text-sm font-yekan-600 text-nowrap">
            <p className=" w-[100px]">#</p>
            <p className=" w-[90px]">دوره</p>
            <p className=" w-[100px]">مدرس</p>
            <p className=" w-[120px]">تاریخ برگزاری</p>
            <p className=" w-[95px]">سطح</p>
            <p className=" w-[40px]"></p>
          </div>
        </div>
      <div>
        {courses.map((course, index) => (
          <div
            key={course.id}
            className="flex items-center gap-[50px] py-[22px] text-nowrap  text-sm"
          >
            <div>
              <img
                src={course.image}
                className="min-w-[83px] h-[52px] border rounded-[12px] object-cover"
                alt=""
              />
            </div>
            <p className="min-w-0 font-yekan-600">{course.title}</p>
            <p className=" font-yekan-600">{course.instructor}</p>
            <p className="font-yekan-600">{course.date}</p>
            <p className="px-2 py-1 flex items-center justify-center bg-[#FF37F5] rounded-3xl text-white text-[14px]">
              {course.level}
            </p>
            <div className="p-2 ">

            <ViewIcon width={24} height={24} />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTable;
