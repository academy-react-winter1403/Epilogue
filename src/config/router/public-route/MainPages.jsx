import React from "react";
import Landing from "../../../pages/Landing";
import Root from "../../../app/layout/Landing/Root";
import { createBrowserRouter } from "react-router-dom";
import CourseDetail from "../../../pages/CourseDetail";

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
  ],
};
