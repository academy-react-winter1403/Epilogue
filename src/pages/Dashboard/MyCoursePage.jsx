import React from "react";
import DashboardTable from "../../components/common/Dashboard/Table/DashboardTable";
import { Calendar03Icon } from "../../components/common/Icons/CalenderIcon";

const MyCoursePage = () => {
  return (
    <div className="pb-6 px-6 flex flex-col h-full gap-6 ">
      <p className="text-[24px] text-nowrap font-yekan-600 py-2">دوره من</p>
      <div className="md:col-span-full  min-h-full bg-[#F6F6F6] rounded-3xl">
        <DashboardTable />
      </div>
    </div>
  );
};

export default MyCoursePage;
