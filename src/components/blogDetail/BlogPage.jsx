import React from 'react'
import { useBlogDetails } from '../../core/hooks/blogHooks/useBlogDetails';
import { DetailBlog } from './DetailBlog'
import { CommentBlog } from './commentBlog/commentBlog';
import { BlogWrapper } from './relatedBlogs/CardWrapper';


const BlogPage = () => {
  const {  data: blog, isLoading,  error } = useBlogDetails();
console.log(blog,'blogggg')
  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا در دریافت اطلاعات دوره : خطا :{error.message}</div>;
  
  return (
    <div className='w-auto bg-white'>
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">

            {/* detail */}
            <DetailBlog newsId={blog?.id} blog={blog} />
            
            {/* comments */}
           <CommentBlog newsId={blog?.id} blog={blog}/>

            {/* related-courses */}
            <div className='w-full h-50 border border-gray-300'>  <BlogWrapper newsId={blog?.id} blog={blog}/>
            </div>
          
        </div>
    </div>
  )
}

export { BlogPage }

