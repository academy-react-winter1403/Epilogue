import React from "react";
import DashboardTable from "../../components/common/Dashboard/Table/DashboardTable";
// import TopOfTable from "../../components/dashboard/MyCourses";
import { Search01Icon } from "../../components/common/Icons/SearchIcon";
import { Calendar02Icon } from "../../components/common/Icons/CalenderIcon";

const MyCoursePage = () => {
  return (
    <div className="py-6 px-6 flex flex-col h-full gap-6 ">
      <p className="text-[24px] text-nowrap font-yekan-600 py-2">دوره من</p>
      <div className="flex flex-row gap-[56px]">
        <div className="w-[86px] h-[43px] flex flex-row gap-2 ">
          <div className="flex items-center gap-2 justify-center p-2">
            <Search01Icon color={"00000"} />
            <p className="text-[14px]  text-black">جست‌جو</p>
          </div>
        </div>

        <div className="w-[174px] h-[43px] flex flex-row gap-2 ">
          <div className="flex items-center gap-2 justify-center p-2">
            <Calendar02Icon color={"00000"} />
            <p className="text-[14px] flex items-center justify-center text-black">
              تاریخ برگزاری - اتمام
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] font-yekan-600 text-nowrap">
              {/* {dateTime.date} */}
            </p>
          </div>
        </div>
      </div>
      <div className="md:col-span-full  min-h-full bg-[#F6F6F6] rounded-3xl">
        <DashboardTable />
      </div>
    </div>
  );
};

export default MyCoursePage;
