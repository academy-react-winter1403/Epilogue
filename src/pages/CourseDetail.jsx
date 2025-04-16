import React from 'react'
import { DetailPage } from '../components/courseDetail/DetailPage'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient();
const CourseDetail = () => {
  
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <DetailPage/>
      </QueryClientProvider>
    </div>
  )
}

export{ CourseDetail}
