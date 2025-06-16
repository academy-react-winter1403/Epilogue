import React from 'react'
import { useState, useEffect } from 'react';
import { Search01Icon } from '../../common/Icons/SearchIcon';

const Table = ({ homeworkList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSessions, setFilteredSessions] = useState([]);
  
  useEffect(() => {
    if (homeworkList) {
      const term = searchTerm.toLowerCase();
      const newFilteredSessions = homeworkList.filter(session =>
        (session.sessionTitle?.toLowerCase().includes(term) ||
        session.hwTitle?.toLowerCase().includes(term) ||
        session.groupName?.toLowerCase().includes(term)
      ));
      setFilteredSessions(newFilteredSessions);
    }
  }, [homeworkList, searchTerm]);

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('fa-IR');
  };

  return (
    <div className="py-6 px-4 sm:px-6 flex flex-col h-full gap-4 sm:gap-6">
      <p className="text-[20px] sm:text-[24px] text-nowrap font-yekan-600 py-2">
        لیست تکالیف
      </p>
      
      {/* Search Section */}
      <div className="w-full">
        <div className="flex flex-col gap-2 p-2">
          <div className="flex flex-row gap-2 items-center">
            <Search01Icon color={"00000"} className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="text-[14px] text-black">جست‌جو</p>
          </div>
          <div className="flex items-center relative w-full">
            <input
              type="search"
              placeholder="جستجو در جلسات..."
              className="w-full h-10 sm:h-12 text-xs sm:text-sm px-3.5 rounded-2xl bg-[#F1F1F1] focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="button"
              className="absolute left-2 bg-transparent p-1"
            >
              <Search01Icon className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Table Section */}
      <div className="w-full themed-dashTable min-h-full bg-[#F6F6F6] rounded-3xl overflow-hidden">
        <div className="p-2 sm:p-4 overflow-auto">
          {/* Table Header */}
          <div className="bg-[#F1F1F1] themed-dashTable-header rounded-[16px] text-[#707070] p-3 min-w-[600px] grid grid-cols-12 gap-2 sm:gap-4 text-xs sm:text-sm font-yekan-600">
            <p className="hidden sm:block col-span-1">#</p>
            <p className="col-span-4 sm:col-span-3">عنوان جلسه</p>
            <p className="col-span-4 sm:col-span-3">عنوان تکلیف</p>
            <p className="hidden sm:block col-span-3">نام گروه</p>
            <p className="col-span-4 sm:col-span-2">تاریخ</p>
          </div>

          {/* Table Body */}
          <div className="overflow-y-auto">
            {filteredSessions.length === 0 ? (
              <p className="flex items-center justify-center py-8 sm:py-16 text-sm sm:text-base min-w-[600px]">
                {searchTerm ? 'نتیجه‌ای یافت نشد' : 'جلسه‌ای وجود ندارد'}
              </p>
            ) : (
              <div className="min-w-[600px]">
                {filteredSessions.map((item, index) => (
                  <div
                    key={item.sessionId}
                    className="grid grid-cols-12 gap-2 sm:gap-4 items-center py-3 sm:py-4 text-xs sm:text-sm text-black border-b border-gray-200"
                  >
                    <p className="hidden sm:block font-yekan-600 col-span-1">{index + 1}</p>
                    <p className="truncate font-yekan-600 col-span-4 sm:col-span-3">{item.sessionTitle || '-'}</p>
                    <p className="truncate font-yekan-600 col-span-4 sm:col-span-3">{item.hwTitle || '-'}</p>
                    <p className="hidden sm:block truncate font-yekan-600 col-span-3">{item.groupName || '-'}</p>
                    <p className="font-yekan-600 col-span-4 sm:col-span-2">{formatDate(item.homeWorkDate)}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table
