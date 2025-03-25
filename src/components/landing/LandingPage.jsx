import React, { useEffect, useState } from "react";
import FirstSection from "./firseSection/FirstSection";
import MiddleSection from "./middleSection/MiddleSection";
import TopProfessors from "./topProfessors/topProfessors";
import { getCourseTop } from "../../core/services/api/LandingApi/getCourseTop";
import { getSameNews } from "../../core/services/api/LandingApi/getSameNews";
import BestCourseWrapper from "./bestCourse/CardWrapper";
import BestBlogWrapper from "./bestBlogs/CardWrapper";
import Line from "./line/Line";
import { getTeacher } from "../../core/services/api/LandingApi/getTeacher";

const LandingPage = () => {
  const [course, setcourse] = useState();

  const getcourses = async () => {
    const course = await getCourseTop();
    setcourse(course);
  };

  useEffect(() => {
    getcourses();
  }, []);

  const [news, setnews] = useState();
  const getnews = async () => {
    const { news } = await getSameNews();
    setnews(news);
  };

  useEffect(() => {
    getnews();
  }, []);

  return (
    <div>
      <div className="flex flex-row">
        <FirstSection />
      </div>

      <div className="border-b-4 relative flex items-center justify-evenly h-1 pt-[140px] border-[#00000014] w-full">
        <Line/>
      </div>

      <div className="flex flex-col">
        <MiddleSection />
      </div>

      <div className="px-[39px]">
        <BestCourseWrapper course={course} />
      </div>

      <div className="px-[39px]">
        <BestBlogWrapper news={news} />
      </div>

      <div className="pb-14">
        <TopProfessors />
      </div>
    </div>
  );
};

export default LandingPage;
