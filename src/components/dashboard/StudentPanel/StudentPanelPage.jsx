import React from "react";
import WelcomeUser from "./WelcomeUser";
import DashboardTable from "../../common/Dashboard/Table/DashboardTable";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import ReservedCoursesTable from "../../common/Dashboard/Table/ReserveCourseTable";
import { Link } from "react-router-dom";
import YourComment from "./YourComment";
import { PencilEdit01Icon } from "../../common/Icons/PencelIcon";
import { ArrowLeft01Icon } from "../../common/Icons/ArrowLeftIcon";
const StudentPanelPage = () => {
  const percentage = 66;

  return (
    <div className="py-6 px-6 grid grid-cols-1 gap-6 md:grid-cols-12">
      <div className="md:col-span-12 ">
        <WelcomeUser />
      </div>

      <div className="md:col-span-9 text-[color:var(--color-text-primary)] bg-bg-Dashtable  rounded-3xl">
        <div className="flex flex-row justify-between items-center">
          <p className="text-[14px] font-yekan-600 px-4 py-2">دوره من</p>
          <Link
            to={"/StudentPanel/my-courses"}
            className="text-[14px] text-[#3772FF] flex flex-row gap-1 font-yekan-600 px-4 py-2"
          >
            مشاهده بیشتر
            <ArrowLeft01Icon color={"#3772FF"} />
          </Link>
        </div>
        <DashboardTable showIcon={false} />
      </div>

      <div className="md:col-span-3 rounded-3xl md:flex md:flex-col text-[color:var(--color-text-primary)] bg-bg-Dashtable">
        <div className="justify-between items-center px-4 py-2 flex flex-row ">

          <p className="text-[12px] text-nowrap font-yekan-600">
            وضعیت اطلاعات حساب کاربری
          </p>
          <Link to={"/StudentPanel/edite-profile/profile-info"}>
          <div className="flex items-center">
            <PencilEdit01Icon width={20} height={20} color={"#3772FF"} />
          </div>
          </Link>
          
        </div>
        <div className="mt-[22px] m-auto w-[136px] ">
          <CircularProgressbarWithChildren
            value={percentage}
            styles={buildStyles({
              trailColor: "#DCDCDC",
              pathColor: "#FFDE37",
            })}
          >
            <div className="flex items-center justify-center w-full h-full">
              <strong>{percentage}%</strong>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <p className="py-5 flex items-center justify-center text-[12px] text-nowrap font-yekan-600">
          اطلاعات حساب کاربری شما کامل نیست
        </p>
      </div>

      <div className="md:col-span-7 text-[color:var(--color-text-primary)] bg-bg-Dashtable flex flex-col rounded-3xl">
        <div className="flex flex-row justify-between items-center">
          <p className="text-[14px] font-yekan-600 px-4  py-2">رزرو من</p>
          <Link
            to={"/StudentPanel/my-reserve"}
            className="text-[14px] text-[#3772FF] px-4 flex flex-row gap-1 font-yekan-600 py-2"
          >
            مشاهده بیشتر
            <ArrowLeft01Icon color={"#3772FF"} />
          </Link>
        </div>
        <ReservedCoursesTable showAccept={false} />
      </div>

      <div className="md:col-span-5  h-[487px] rounded-3xl text-[color:var(--color-text-primary)] bg-bg-Dashtable">
        <div className="justify-between items-center flex flex-row text-nowrap text-[14px] font-yekan-600 px-4 py-2">
          <p>نظرات شما</p>
          <YourComment/>
          <p className="text-[#3772FF] flex flex-row gap-1 ">
            مشاهده بیشتر
            <ArrowLeft01Icon color={"#3772FF"} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentPanelPage;
