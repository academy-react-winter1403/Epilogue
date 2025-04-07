import { LayOut } from "../../../components/layOut/LayOut";
import { Body } from "../../../components/CourseList/Body";
export const CourseListRoot = {
  path: "/CourseList",
  element: <LayOut />,
  children: [
    {element: <Body /> },
  ],
};