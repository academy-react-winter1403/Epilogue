import DashboardLayout from "../../../app/layout/Dashboard";
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
  ],
};
