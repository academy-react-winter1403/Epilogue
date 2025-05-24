import React, { useState } from "react";
import DashboardTable from "../../components/common/Dashboard/Table/DashboardTable"; 
import { Search01Icon } from "../../components/common/Icons/SearchIcon"; 
import { useTranslation } from 'react-i18next'; 

const MyCoursePage = () => {
  const { t } = useTranslation('dashboard'); 
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="py-6 px-6 flex flex-col h-full gap-6 ">
      <p className="text-[24px] text-nowrap font-yekan-600 py-2">{t('myCourses')}</p>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-2 p-2">
          <div className="flex flex-row gap-2">
            <Search01Icon color={"00000"} />
            <p className="text-[14px] text-black">{t('search')}</p> 
          </div>
          <form className="flex items-center justify-center">
            <input
              type="search"
              placeholder={t('searchCoursePlaceholder')} 
              className="w-full themed-dash-input md:w-[248px] h-[48px] text-[12px] px-3.5 rounded-2xl bg-[#F1F1F1]"
              value={searchTerm}
              onChange={handleSearch}
              aria-label={t('searchCoursePlaceholder')} 
            />
            <button
              type="submit"
              className="bg-blue-500 themed-dash-but relative pt-1.5 left-[40px] hover:bg-blue-700 text-white font-bold w-[48px] rounded-2xl h-[48px]"
              aria-label={t('search')} 
            >
              <div className="flex items-center justify-center mb-2">
                <Search01Icon />
              </div>
            </button>
          </form>
        </div>

      </div>
      <div className="md:col-span-full themed-dashTable min-h-full bg-[#F6F6F6] rounded-3xl">
        <DashboardTable searchTerm={searchTerm} showIcon={true} />
      </div>
    </div>
  );
};

export default MyCoursePage;