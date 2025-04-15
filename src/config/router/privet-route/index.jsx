import DashboardLayout from "../../../app/layout/Dashboard";
import BlogFavPage from "../../../pages/Dashboard/BlogFavPage";
import CourseFavPage from "../../../pages/Dashboard/CourseFavPage";
import MyCoursePage from "../../../pages/Dashboard/MyCoursePage";
import MyReservePage from "../../../pages/Dashboard/MyReservePage";
import StudentPanel from "../../../pages/Dashboard/StudentPanel";

export const dashboard = {
  path: "/StudentPanel",
  element: <DashboardLayout />,
  children: [
    {
      path: "/StudentPanel/dashboard",
      element: <StudentPanel />,
    },
    {
      path: "/StudentPanel/my-courses",
      element: <MyCoursePage />,
    },
    {
      path: "/StudentPanel/my-reserve",
      element: <MyReservePage />,
    },
    {
      path: "/StudentPanel/course-fav",
      element: <CourseFavPage />,
    },
    {
      path: "/StudentPanel/blog-fav",
      element: <BlogFavPage />,
    },
  ],
};
