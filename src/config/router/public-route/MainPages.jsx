import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Landing = React.lazy(() => import("../../../pages/Landing"));
const Root = React.lazy(() => import("../../../app/layout/Landing/Root"));
const CourseDetail = React.lazy(() => import("../../../pages/CourseDetail"));
const Spinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);
const LazyWrapper = ({ children }) => (
  <Suspense fallback={<Spinner />}>{children}</Suspense>
); 

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
      path: "/course-detail",
      element: <LazyWrapper><CourseDetail /></LazyWrapper>,
    },
  ],
};