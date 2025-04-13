import DashboardLayout from "../../../app/layout/Dashboard";
import BlogFavPage from "../../../pages/Dashboard/BlogFavPage";
import CourseFavPage from "../../../pages/Dashboard/CourseFavPage";
import MyCoursePage from "../../../pages/Dashboard/MyCoursePage";
import MyReservePage from "../../../pages/Dashboard/MyReservePage";
import StudentPanel from "../../../pages/Dashboard/StudentPanel";

export const dashboard = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      path: "/dashboard/student-panel",
      element: <StudentPanel />,
    },
    {
      path: "/dashboard/my-courses",
      element: <MyCoursePage />,
    },
    {
      path: "/dashboard/my-reserve",
      element: <MyReservePage />,
    },
    {
      path: "/dashboard/course-fav",
      element: <CourseFavPage />,
    },
    {
      path: "/dashboard/blog-fav",
      element: <BlogFavPage />,
    },
  ],
};
