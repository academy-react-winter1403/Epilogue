import React from "react";
import Landing from "../../../pages/Landing";
import Root from "../../../app/layout/Landing/Root";
import CourseDetail from "../../../pages/CourseDetail";
import { Body } from "../../../components/CourseList/Body";
import { BlogeList } from "../../../components/BlogeList/BlogeList";

export const mainPages = {
  path: "/",
  element: <Root />,
  children: [
    {
      index: true,
      path: "/",
      element: <Landing />,
    },
    {
      path: "/course-detail",
      element: <CourseDetail />,
    },
    {
      path: "/CourseList",
      element: <Body />,
    },
    {
      path: "/BlogeList",
      element: <BlogeList />,
    },
  ],
};
