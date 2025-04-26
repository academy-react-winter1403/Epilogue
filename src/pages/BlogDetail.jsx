import React from 'react'
import { BlogPage } from '../components/blogDetail/BlogPage'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient();
const BlogDetail = () => {
  return (

    <QueryClientProvider client={queryClient}>
      <BlogPage/>
    </QueryClientProvider>
  )
}

export default BlogDetail