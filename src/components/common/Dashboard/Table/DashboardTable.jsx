import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React from "react";

const DashboardTable = ({ courses }) => {
  return (
    <Table
      slots={{
        thead: "bg-blue-500 text-white text-lg font-bold rounded-t-3xl",
      }}
      className="bg-[#F6F6F6] rounded-3xl w-[730px] h-[246px]"
      aria-label="جدول دوره‌ها"
    >
      <TableHeader>
        <TableColumn>#</TableColumn>
        <TableColumn> دوره</TableColumn>
        <TableColumn>مدرس</TableColumn>
        <TableColumn>تاریخ برگزاری</TableColumn>
        <TableColumn>سطح</TableColumn>
        <TableColumn></TableColumn>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow key={course.id}>
            <TableCell>
              <img
                src={course.image}
                className="w-[83px] h-[52px] rounded-xl object-cover"
              />
            </TableCell>
            <TableCell>{course.title}</TableCell>
            <TableCell>{course.instructor}</TableCell>
            <TableCell>{course.date}</TableCell>
            <TableCell>{course.level}</TableCell>
            <TableCell>
              <button className="text-blue-500 hover:text-blue-700">
                {/* <EyeIcon className="w-6 h-6" /> */}
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DashboardTable;
