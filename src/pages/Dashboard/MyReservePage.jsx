import React from "react";
import ReservedCoursesTable from "../../components/common/Dashboard/Table/ReserveCourseTable";

const MyReservePage = () => {
  return (
    <div className="py-6 px-6 flex flex-col h-full gap-6 ">
      <p className="text-[24px] text-nowrap font-yekan-600 py-2">رزرو من</p>
      <div className="md:col-span-full min-h-full bg-[#F6F6F6] rounded-3xl">
        <ReservedCoursesTable />
      </div>
    </div>
  );
};

export default MyReservePage;
