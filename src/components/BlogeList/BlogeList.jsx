import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useStore from "../../core/Store/Zustand-Store";
import Pagination from "./Pageination";
import CardList from "./CardList";
import Filter from "./Filter/Filter";
import Sorting from "./Sorting";

const fetchNews = async (pageNumber, SortCol, SortType) => {
  const params = {
    PageNumber: pageNumber,
    RowsOFPage: 10,
    SortingCol: SortCol, // ستون مرتب‌سازی
    SortType: SortType, // نوع مرتب‌سازی
  };

  try {
    const response = await axios.get(
      `https://classapi.sepehracademy.ir/api/News`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export function BlogeList() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    pageNumber, // این مقدار از Zustand است
    setPageNumber, // به‌روزرسانی مقدار pageNumber
    SortCol,
    SortType,
  } = useStore((state) => state);

  const { data, isLoading, error } = useQuery({
    queryKey: ["news", pageNumber, SortCol, SortType],
    queryFn: () =>
      fetchNews(pageNumber, SortCol, SortType),
  });

  const totalCount = data?.totalCount;
  const News = data?.news || [];

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

  const filteredCards = News.filter((card) => {
    const matchesSearch =
      !searchTerm ||
      (card.title &&
        card.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesSearch;
  });

  const totalPages = Math.ceil(totalCount / 9);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">اطلاعات بیشتر، درک بهتر</h1>
        <h2 className="text-lg font-medium text-gray-700 mt-4">
          ما در بلاگ‌ها اطلاعات شما را نسبت به<br />تکنولوژی‌هایی که یاد می‌گیرید بیشتر می‌کنیم.
        </h2>
      </div>

      <Sorting />

      <div className="mt-10 gap-10 md:flex">
        <Filter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <CardList sortedCards={filteredCards} currentCards={News} />
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={pageNumber} // استفاده از مقدار pageNumber
        setPageNumber={setPageNumber}
      />
    </div>
  );
}