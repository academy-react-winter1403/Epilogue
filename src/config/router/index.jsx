import React from 'react'
import Landing from '../../pages/Landing';
import Root from '../../app/layout/Landing/Root';
import { createBrowserRouter } from 'react-router-dom';
import CourseDetail from '../../pages/CourseDetail';

export const mainPages = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Landing />,
            },
            {
                path: "/course-detail",
                element: <CourseDetail />,
            },
        ],
    },
]);

