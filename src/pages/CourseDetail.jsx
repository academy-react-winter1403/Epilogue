import React from 'react'
import { DetailPage } from '../components/courseDetail/DetailPage'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient();
const CourseDetail = () => {
  
  return (

    <QueryClientProvider client={queryClient}>
      <DetailPage/>
    </QueryClientProvider>
    
  )
}

export default CourseDetail
