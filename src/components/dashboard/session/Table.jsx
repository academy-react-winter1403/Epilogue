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
      <div className="py-6 px-6 flex flex-col h-full gap-6">
        <p className="text-[24px] text-nowrap font-yekan-600 py-2">
          لیست جلسات و تکالیف
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row gap-2">
              <Search01Icon color={"00000"} />
              <p className="text-[14px] text-black">جست‌جو</p>
            </div>
            <form className="flex items-center">
              <input
                type="search"
                placeholder="جستجو در جلسات..."
                className="w-full themed-dash-input md:w-[248px] h-[48px] text-[12px] px-3.5 rounded-2xl bg-[#F1F1F1] focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 relative pt-1.5 left-[40px] themed-dash-but hover:bg-blue-700 text-white font-bold w-[48px] rounded-2xl h-[48px]"
              >
                <div className="flex items-center justify-center mb-2">
                  <Search01Icon />
                </div>
              </button>
            </form>
          </div>
        </div>
        
        <div className="md:col-span-full themed-dashTable min-h-full bg-[#F6F6F6] rounded-3xl">
          <div className="mt-4 px-4 lg:px-4 lg:mt-5 overflow-auto">
            <div className="bg-[#F1F1F1] themed-dashTable-header rounded-[16px] text-[#707070] gap-[30px] p-3 flex text-sm font-yekan-600 text-nowrap">
              <p className="w-[10%]">#</p>
              <p className="w-[25%]">عنوان جلسه</p>
              <p className="w-[25%]">عنوان تکلیف</p>
              <p className="w-[20%]">نام گروه</p>
              <p className="w-[20%]">تاریخ تکلیف</p>
            </div>
  
            <div className="overflow-y-auto">
              {filteredSessions.length === 0 ? (
                <p className="flex items-center justify-center py-16">
                  {searchTerm ? 'نتیجه‌ای یافت نشد' : 'جلسه‌ای وجود ندارد'}
                </p>
              ) : (
                filteredSessions.map((item, index) => (
                  <div
                    key={item.sessionId}
                    className="flex items-center gap-[30px] py-[22px] text-nowrap text-sm text-black border-b border-gray-200"
                  >
                    <p className="w-[10%] font-yekan-600">{index + 1}</p>
                    <p className="w-[25%] truncate font-yekan-600">{item.sessionTitle || '-'}</p>
                    <p className="w-[25%] truncate font-yekan-600">{item.hwTitle || '-'}</p>
                    <p className="w-[20%] truncate font-yekan-600">{item.groupName || '-'}</p>
                    <p className="w-[20%] font-yekan-600">
                      {formatDate(item.homeWorkDate)}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  


export default Table
