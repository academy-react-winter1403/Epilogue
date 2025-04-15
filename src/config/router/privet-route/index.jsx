import DashboardLayout from "../../../app/layout/Dashboard";
import ProfileLayout from "../../../app/layout/Dashboard/ProfileLayout";
import BlogFavPage from "../../../pages/Dashboard/BlogFavPage";
import CourseFavPage from "../../../pages/Dashboard/CourseFavPage";
import MyCoursePage from "../../../pages/Dashboard/MyCoursePage";
import MyReservePage from "../../../pages/Dashboard/MyReservePage";
import LinksPage from "../../../pages/Dashboard/Profike/LinksPage";
import LocationPage from "../../../pages/Dashboard/Profike/LocationPage";
import ProfileInfoPage from "../../../pages/Dashboard/Profike/ProfileInfoPage";
import ProfilePage from "../../../pages/Dashboard/Profike/ProfilePage";
import ProfilePicPage from "../../../pages/Dashboard/Profike/ProfilePicPage";
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
    {
      path: "/StudentPanel/edite-profile",
      element: <ProfileLayout />,
      children:[
        {
          path: "/StudentPanel/edite-profile/profile-info",
          element: <ProfileInfoPage />,
        },
        {
          path: "/StudentPanel/edite-profile/profile-pic",
          element: <ProfilePicPage />,
        },
        {
          path: "/StudentPanel/edite-profile/location",
          element: <LocationPage />,
        },
        {
          path: "/StudentPanel/edite-profile/links",
          element: <LinksPage />,
        },
      ]
    },
  ],
};
