import React from "react";
import BestCourse from "./BestCourse";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; 

const BestCourseWrapper = ({ course }) => {
  const { t } = useTranslation('bestCourseWrapper');

  return (
    <>
      <div className=" pt-[118px] font-yekan-700 font-bold flex flex-col items-center justify-center pb-[46px] text-nowrap text-[32px]">
        {t('topCoursesOfWeek')} 
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mr-10 lg:mr-0 gap-6">
        {Array.isArray(course) &&
          course
            .slice(0, 4)
            .map((item, index) => <BestCourse key={index} data={item} />)}
      </div>
      <div className="flex flex-row items-center justify-center pt-12">
        <Link to={"/CourseList"}>
          <button className="w-[125px] font-yekan-500 cursor-pointer h-[39px] rounded-[40px] text-white bg-[#2F2F2F]">
            {t('viewMore')}
          </button>
        </Link>
      </div>
    </>
  );
};

export default BestCourseWrapper;