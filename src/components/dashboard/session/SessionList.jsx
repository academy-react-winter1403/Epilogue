import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { getStudentHomeworkList } from '../../../core/services/api/session/getStudentHomeworkList';
import Table from './Table';


const SessionList = () => {
  const { data: homeworkList, isLoading, isError, error } = useQuery({
    queryKey: ['studentHomeworkList'],
    queryFn: getStudentHomeworkList,
  });

  if (isLoading) {
    return <div className="flex items-center justify-center py-16">در حال بارگذاری لیست جلسات...</div>;
  }

  if (isError) {
    return <div className="flex items-center justify-center py-16 text-red-500">خطا در دریافت لیست جلسات: {error.message}</div>;
  }

  return (
    <div>
      <div className="mb-4">
        
      </div>
      <Table 
        homeworkList={homeworkList} 
      />
    </div>
  );
};


export default SessionList
