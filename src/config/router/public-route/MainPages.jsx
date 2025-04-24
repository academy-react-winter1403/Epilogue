import React from "react";
import Landing from "../../../pages/Landing";
import Root from "../../../app/layout/Landing/Root";
import { createBrowserRouter } from "react-router-dom";
import {CourseDetail} from "../../../pages/CourseDetail";
import { BlogDetail } from "../../../pages/BlogDetail";

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
      path: "/course-detail/:CourseId",
      element: <CourseDetail />,
    },{
      path: "/blog-detail/:newsId",
      element: <BlogDetail/> ,
  },
  ],
};
