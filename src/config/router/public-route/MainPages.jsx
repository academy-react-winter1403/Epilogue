import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import {CourseDetail} from "../../../pages/CourseDetail";
import { BlogDetail } from "../../../pages/BlogDetail";
=======
import { BlogeList } from "../../../components/BlogeList/BlogeList";
import { Body } from "../../../components/CourseList/Body";

const Landing = React.lazy(() => import("../../../pages/Landing"));
const Root = React.lazy(() => import("../../../app/layout/Landing/Root"));
const CourseDetail = React.lazy(() => import("../../../pages/CourseDetail"));
// const Body = React.lazy(() => import("../../../components/CourseList/Body"));
// const BlogeList = React(() => import("../../../components/BlogeList/BlogeList"));



const Spinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);
const LazyWrapper = ({ children }) => (
  <Suspense fallback={<Spinner />}>{children}</Suspense>
); 

>>>>>>> a84d81b8f5eff428f8bb6dab8c8b69153ccfe8fc

export const mainPages = {
  path: "/",
  element: <LazyWrapper><Root /></LazyWrapper>,
  children: [
    {
      index: true,
      path: "/",
      element: <LazyWrapper><Landing /></LazyWrapper>,
    },
    {
<<<<<<< HEAD
      path: "/course-detail/:CourseId",
      element: <CourseDetail />,
    },{
      path: "/blog-detail/:newsId",
      element: <BlogDetail/> ,
  },
=======
      path: "/course-detail",
      element: <LazyWrapper><CourseDetail /></LazyWrapper>,
    },
    {
      path: "/CourseList",
      element: <Body />,
    },
    {
      path: "/BlogeList",
      element: <BlogeList />,
    },
>>>>>>> a84d81b8f5eff428f8bb6dab8c8b69153ccfe8fc
  ],
};