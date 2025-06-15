import { useBlogDetails } from '../../core/hooks/blogHooks/useBlogDetails';
import { DetailBlog } from './DetailBlog'
import { CommentBlog } from './commentBlog/commentBlog';
import { RelatedBlogs } from './relatedBlogs/RelatedBlog';
import { useTranslation } from 'react-i18next'; 

const BlogPage = () => {

  const {  data: blog, isLoading,  error } = useBlogDetails();
  console.log(blog, 'blogggggggggg')
  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا در دریافت اطلاعات دوره : خطا :{error.message}</div>;

    const { t } = useTranslation('blogList'); 

  return (
    <div className='w-auto '>
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">

            <DetailBlog newsId={blog?.detailsNewsDto?.id} blog={blog} />
            

            {/* comments */}
           <CommentBlog newsId={blog?.detailsNewsDto?.id} blog={blog} userId={blog?.detailsNewsDto?.userId} />


            <RelatedBlogs newsId={blog?.detailsNewsDto?.id} />
            
        </div>
    </div>
  )
}

export { BlogPage }