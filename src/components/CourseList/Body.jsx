import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useStore from "../../core/Store/Zustand-Store";
import Pagination from "./Pagination";
import CardList from "./CardList";
import Filter from "./Filter/Filter";
import Sorting from "./Sorting";

const fetchCourses = async (pageNumber, teacherId, technologies, techCount) => {
  const params = {
    PageNumber: pageNumber,
    RowsOFPage: 9,
    TeacherId: teacherId,
    ListTech: technologies,
    TechCount: techCount,
  };
  console.log(params, "params");
  try {
    const response = await axios.get(
      `https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.error("خطا در درخواست به API:", error);
    throw error;
  }
};

export function Body() {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [activeSort, setActiveSort] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 100000000]);

  const { pageNumber, setPageNumber, teacherId, technologies, techCount } =
    useStore((state) => state);
  const { data, isLoading, error } = useQuery({
    queryKey: ["courses", pageNumber, teacherId, technologies, techCount],
    queryFn: () => fetchCourses(pageNumber, teacherId, technologies, techCount),
  });

  const totalCount = data?.totalCount;
  const courses = data?.courseFilterDtos;

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
  const cardsPerPage = 12;
  const offset = currentPage * cardsPerPage;
  const currentCards = courses.slice(offset, offset + cardsPerPage);
  const totalPages = Math.ceil(totalCount / 12);

  const handleSortChange = (sortType) => {
    setActiveSort(sortType);
  };
  const filteredCards = currentCards.filter((card) => {
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
      !selectedLevel || card.levelName === selectedLevel.value;
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
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">شروع ماجراجویی جدید</h1>
        <h2 className="text-lg font-medium text-gray-700 mt-4">
          یک شروع قوی برای یادگیری یک مسئله جدید میتونه تو پیشرفت کمکت کنه
        </h2>
      </div>

      <Sorting onSortChange={handleSortChange} />

      <div className="flex mt-10 gap-10">
        <Filter
          cards={courses}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedInstructor={selectedInstructor}
          setSelectedInstructor={setSelectedInstructor}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          setPriceRange={setPriceRange}
        />

        <CardList sortedCards={filteredCards} currentCards={currentCards} />
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}
