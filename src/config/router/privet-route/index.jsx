import DashboardLayout from "../../../app/layout/Dashboard";
import StudentPanel from "../../../pages/Dashboard/StudentPanel";

export const dashboard = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      path: "/dashboard/student-panel",
      element: <StudentPanel />,
    },
  ],
};
