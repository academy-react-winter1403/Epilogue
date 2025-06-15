import React, { useState } from "react";
import ReservedCoursesTable from "../../components/common/Dashboard/Table/ReserveCourseTable"; 
import { Search01Icon } from "../../components/common/Icons/SearchIcon"; 
import { useTranslation } from 'react-i18next'; 

const MyReservePage = () => {
  const { t } = useTranslation('dashboard');
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="py-6 px-6 flex flex-col h-full gap-6 ">
      <p className="text-[24px] text-nowrap font-yekan-600 py-2">{t('myReservations')}</p> 
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-2 p-2">

        </div>

      </div>
      <div className="md:col-span-full min-h-fit themed-dashTable bg-[#F6F6F6] rounded-3xl">

        <ReservedCoursesTable searchTerm={searchTerm} showAccept={true} />
      </div>
    </div>
  );
};

export default MyReservePage;