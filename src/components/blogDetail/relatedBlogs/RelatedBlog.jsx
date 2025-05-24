import React from "react";
import { formatDate } from "../../common/formatDate/formatDate";
import { Calendar03Icon } from "../../common/Icons/Calender";
import { ViewIcon } from "../../common/Icons/ViewIcon";
import { useRelatedBlogs } from "../../../core/hooks/blogHooks/useRelatedBlog";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RelatedBlogs = ({ newsId }) => {
  const { t } = useTranslation('blogList'); 
  const { data, isLoading, error } = useRelatedBlogs(newsId);

  if (isLoading) return <div>{t('loadingRelatedBlogs')}</div>; 
  if (error) return <div>{t('errorFetchingRelatedBlogs')}</div>; 
  
  const blogsArray = data?.news || [];
  
  if (blogsArray.length === 0) return null;

  return (
    <section className='w-auto md:mt-10 md:mr-10 mr-130 mb-15'>
      <div className="font-yekan-700 font-bold flex flex-col items-center justify-center text-nowrap text-[32px]">
        <h3 className="self-start">{t('relatedBlogsTitle')}</h3>
      </div>
      <div className="flex justify-center items-center gap-2">
        {blogsArray
          .filter(blog => blog.id !== newsId)
          .slice(0, 3)
          .map(blog => (
            <Link 
              to={`/blog-detail/${blog.id}`} 
              key={blog.id} 
              className="md:w-[431px] w-[322px] text-black bg-white rounded-lg"
            >
              <div>
                {blog.currentImageAddressTumb ? (
                  <div className="h-[293px]">
                    <img
                      className="rounded-[32px] w-full h-full object-cover"
                      src={blog.currentImageAddressTumb}
                      alt={blog.title || t('blogImage')} 
                    />
                  </div>
                ):(
                  <div className="rounded-[32px] bg-gray-300 md:w-[400px] w-[322px] h-[293px]"></div>
                )}
                
                <div className="p-5 w-[432px] h-[60px]">
                  <h5 className="mb-1 font-yekan-700 text-[24px] font-bold tracking-tight text-nowrap text-gray-900">
                    {blog.title}
                  </h5>
                  <div className="gap-[20px] lg:gap-[116px] flex flex-row">
                    <p className="mb-3 text-nowrap text-[14px] font-yekan-500 text-[#707070]">
                      {blog.author || t('unknownAuthor')}
                    </p>

                    <div className="flex flex-row gap-4">
                      {blog.insertDate && (
                        <p className="mb-3 flex flex-row gap-1 text-nowrap text-[14px] font-yekan-500 text-[#707070]">
                          {formatDate(blog.insertDate)}
                          <div className="m-auto">
                            <Calendar03Icon />
                          </div>
                        </p>
                      )}
                      <p className="mb-3 flex flex-row gap-1 text-nowrap text-[14px] font-yekan-500 text-[#707070]">
                        {blog.currentView || 0}
                        <div className="m-auto">
                          <ViewIcon width={24} height={24} cursor="pointer" />
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export { RelatedBlogs };