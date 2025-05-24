import { useBlogDetails } from '../../core/hooks/blogHooks/useBlogDetails';
import { DetailBlog } from './DetailBlog'
import { CommentBlog } from './commentBlog/commentBlog';
import { RelatedBlogs } from './relatedBlogs/RelatedBlog';
import { useTranslation } from 'react-i18next'; 

const BlogPage = () => {
  const { t } = useTranslation('blogList'); 
  const { data: blog, isLoading, error } = useBlogDetails();

  if (isLoading) return <div>{t('loadingBlogDetails')}</div>; 
  if (error) return <div>{t('errorFetchingBlogDetails', { message: error.message })}</div>; 

  return (
    <div className='w-auto bg-white'>
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">

            <DetailBlog newsId={blog?.detailsNewsDto?.id} blog={blog} />
            
           <CommentBlog newsId={blog?.detailsNewsDto?.id} blog={blog}/>

            <RelatedBlogs newsId={blog?.detailsNewsDto?.id} />
            
        </div>
    </div>
  )
}

export { BlogPage }