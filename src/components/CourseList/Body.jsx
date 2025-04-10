import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useStore from "../../core/Store/Zustand-Store";
import Pagination from "./Pagination";
import CardList from "./CardList";
import Filter from "./Filter/Filter";
import Sorting from "./Sorting";

const fetchCourses = async (
  pageNumber,
  teacherId,
  technologies,
  techCount,
  levelName,
  SortCol,
  SortType
) => {
  const params = {
    PageNumber: pageNumber,
    RowsOFPage: 9,
    TeacherId: teacherId,
    ListTech: technologies,
    TechCount: techCount,
    courseLevelId: levelName,
    SortingCol: SortCol, // اضافه کردن ستون مرتب‌سازی
    SortType: SortType, // اضافه کردن نوع مرتب‌سازی
  };
  console.log(params)
  try {
    const response = await axios.get(
      `https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export function Body() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const {
    pageNumber,
    setPageNumber,
    teacherId,
    technologies,
    techCount,
    levelName,
    priceRange,
    SortCol, // گرفتن ستون مرتب‌سازی از Zustand
    SortType, // گرفتن نوع مرتب‌سازی از Zustand
  } = useStore((state) => state);

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "courses",
      pageNumber,
      teacherId,
      technologies,
      techCount,
      levelName,
      SortCol,
      SortType,
    ],
    queryFn: () =>
      fetchCourses(
        pageNumber,
        teacherId,
        technologies,
        techCount,
        levelName,
        SortCol,
        SortType
      ),
  });
  console.log(SortCol,SortType)

  const totalCount = data?.totalCount;
  const courses = data?.courseFilterDtos || [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl">در حال بارگذاری...</h1>
      </div>
    );
  }

  if (error) {
    return <div>خطا: {error.message}</div>;
  }

  const filteredCards = courses.filter((card) => {
    const matchesSearch =
      !searchTerm ||
      (card.title &&
        card.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesInstructor =
      !selectedInstructor || card.teacherName === selectedInstructor;
    const matchesCategory =
      !selectedCategory ||
      (card.technologyList &&
        card.technologyList.split(",").includes(selectedCategory.value));
    const matchesLevel =
      !selectedLevel ||
      (card.LevelList &&
        card.LevelList.split(",").includes(selectedLevel.value));
    const matchesPrice =
      card.cost >= priceRange[0] && card.cost <= priceRange[1];

    return (
      matchesSearch &&
      matchesInstructor &&
      matchesCategory &&
      matchesLevel &&
      matchesPrice
    );
  });

  const totalPages = Math.ceil(totalCount / 9);

  return (
    <div className="container px-4">
      <div className="text-center pt-10">
        <h1 className="text-4xl font-bold">شروع ماجراجویی جدید</h1>
        <h2 className="text-lg font-medium text-gray-700 pt-4">
          یک شروع قوی برای یادگیری یک مسئله جدید میتونه تو پیشرفت کمکت کنه
        </h2>
      </div>

      <Sorting />

      <div className="pt-10 px-10 gap-[31px] md:flex">
        <Filter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedInstructor={selectedInstructor}
          setSelectedInstructor={setSelectedInstructor}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
        />

        <CardList sortedCards={filteredCards} currentCards={courses} />
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setPageNumber={setPageNumber} 
      />
    </div>
  );
}