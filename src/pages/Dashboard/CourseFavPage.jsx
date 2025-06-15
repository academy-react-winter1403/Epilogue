import React, { useState } from "react";
import CourseFavTable from "../../components/dashboard/MyFavCourse/CourseFav";
import { Search01Icon } from "../../components/common/Icons/SearchIcon"; 
import { useTranslation } from 'react-i18next'; 

const CourseFavPage = () => {
  const { t } = useTranslation('dashboard'); 
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="py-6 px-6 flex flex-col h-full gap-6 ">
      <p className="text-[24px] text-nowrap font-yekan-600 py-2">
        {t('favoriteCourses')} 
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-2 p-2">

        </div>
      </div>
      <div className="md:col-span-full themed-dashTable min-h-fit bg-[#F6F6F6] rounded-3xl">
        <CourseFavTable searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default CourseFavPage;