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
    SortingCol: SortCol,
    SortType: SortType,
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
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { pageNumber, setPageNumber, SortCol, SortType } = useStore(
    (state) => state
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["news", pageNumber, SortCol, SortType],
    queryFn: () => fetchNews(pageNumber, SortCol, SortType),
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

    const matchesCategory =
      !selectedCategory ||
      (card.technologyList &&
        card.technologyList.split(",").includes(selectedCategory.value));

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(totalCount / 9);

  return (
    <div className="px-10">
      <div className="text-center flex flex-col">
        <p className="text-4xl font-bold">اطلاعات بیشتر، درک بهتر</p>
        <p className="text-lg font-medium text-gray-700 mt-6">
          ما در بلاگ‌ها اطلاعات شما را نسبت به
          <br />
          تکنولوژی‌هایی که یاد می‌گیرید بیشتر می‌کنیم.
        </p>
      </div>

      <div className="py-4 mt-[50px] gap-8 md:flex">
        <div className="mt-[50px]">
          <Filter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
          />
        </div>

        <div className=" gap-3 md:flex flex-col">
          <div className="flex items-start pr-4">
            <Sorting />
          </div>
          <CardList sortedCards={filteredCards} currentCards={News} />
        </div>
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}
