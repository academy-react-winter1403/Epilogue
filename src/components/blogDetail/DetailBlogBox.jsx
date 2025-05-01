import {BlogFavorite} from './BlogFavorite'
import {CopyUrlButton} from '../common/copyUrl/CopyUrlButton'
import { LikeDislikeBlog } from './LikeDislikeBlog'
import { AverageRating } from '../common/starRating/AverageRating'
import { formatDate } from '../common/formatDate/formatDate'
const DetailBlogBox = ({newsId , blog}) => {
console.log(blog, 'likeidddd')
  return (
    <div className='w-[50%] max-w-2xl xl:max-w-4xl h-auto p-4 sm:p-6 flex flex-col justify-between items-center gap-4'>
        <div className="w-[183px] md:w-[244px] h-[34px] md:h-[46px] font-bold text-2xl sm:text-3xl lg:text-4xl text-black mr-[-40px] md:mr-[10px] lg:mr-[0] self-start md:self-start lg:self-start whitespace-nowrap"><h2>{blog?.detailsNewsDto?.title}</h2></div>

            <div className="lg:w-[600px] md:w-[550px] border-2 border-transparent rounded-[16px] flex flex-col gap-5 md:flex-row lg:flex-row md:border-gray-400 md:border-gray-400 lg:border-gray-400 md:gap-0 lg:gap-0">
                
                <div className='w-[361px] md:w-[325px] lg:w-[325px] h-[80px] flex gap-7 border-2 border-gray-400 md:border-transparent rounded-[16px]'>
                    <div>
                        <div className='flex flex-col gap-4'>
                            <div className='w-[45px] h-[20px] font-medium text-[14px] leading-[100%] text-gray-800 pr-3 pt-2 whitespace-nowrap'> دسته بندی</div>
                            <div className="w-[101px] h-[27px] rounded-[32px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] gap-[8px] bg-red-500 mr-5 mt-1 text-white">{}</div>
                        </div>
                        <div className="w-[80px] h-0 border-2 -rotate-90 border-gray-400 relative left-[-120px] top-[-31px] md:top-[-30.5px] md:left-[-110px]"></div>
                    </div>
                    
                    <div>
                    <div className="md:pr-4 pr-6 pt-2 w-[58px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">منتشر کننده</div>
                    <div className="w-[80px] h-0 border-2 border-transparent -rotate-90 relative top-[16.6px] left-[-110px] md:border-gray-400"></div>
                    </div>
                </div>

                <div className='w-[361px] md:w-[325px] lg:w-[325px] h-[80px] border-2 flex gap-7 border-gray-400 md:border-transparent rounded-[16px]'>

                    <div>
                        <div className='flex flex-col gap-4'> 
                        <div className="md:pr-[-20px] lg:pr-[5px] mr-3 pt-2 w-[76px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">تاریخ انتشار</div>
                        <div className="pr-5 pt-2 w-[124px] h-[23px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black whitespace-nowrap">{formatDate(blog?.detailsNewsDto?.insertDate)}</div>
                        </div>
                        <div className="w-[80px] h-0 border-2 -rotate-90 border-gray-400 relative top-[-23px] left-[-120px] md:top-[-22.5px] md:left-[-130px]"></div>
                    </div>

                    <div>
                        <div className='flex flex-col gap-4'>
                            <div className="mr-[-40px] md:mr-0 md:pr-7 pr-15 pt-2 w-[60px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap"> بازدیدکنندگان</div>
                            <div className="md:pr-8 pr-15 pt-3 w-[152px] h-[23px] top-[37px] left-[25px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black whitespace-nowrap">{blog?.detailsNewsDto?.currentView}</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="self-start mr-[-85px] md:mr-[-5px] border-2 border-transparent rounded-[16px] md:border-gray-400 ">
                
                <div className='mr-9 w-[361px] md:w-[325px] lg:w-[325px] h-[80px] flex gap-7 border-2 border-gray-400 md:border-transparent rounded-[16px]'>

                    <div>
                        <div className='flex flex-col gap-4'> 
                            <div className='pr-3 md:mr-[-35px] pt-2 w-[45px] h-[20px] font-medium text-[14px] leading-[100%] text-gray-800 whitespace-nowrap'> تعداد لایک</div>
                            <div className="pr-3 pt-2 md:mr-[-35px] w-[124px] h-[23px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black whitespace-nowrap">{blog?.detailsNewsDto?.currentLikeCount}</div>
                        </div>
                        <div className="w-[80px] h-0 border-2 -rotate-90 border-gray-400 relative top-[-23px] left-[-120px] md:top-[-22.5px] md:left-[-100px]"></div>
                    </div>
                    
                
                    <div className='flex flex-col gap-4'>
                        <div className="md:pr-8 pr-5 pt-2 md:mr-[15px]  w-[58px] h-[20px] font-dana font-medium text-[14px] leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap"> تعداد دیسلایک</div>
                        <div className="md:pr-8 pr-5 pt-2 md:mr-[15px]  w-[96px] h-[23px] font-dana font-medium text-[16px] leading-[100%] tracking-[0%] text-right text-black whitespace-nowrap">{blog?.detailsNewsDto?.currentDissLikeCount}</div>
                    </div>

                </div>
            </div>
            
            <div className="mr-[-60px] w-full md:h-[34px] h-[29px] flex justify-between">
                <div className='flex gap-2 justify-center items-center'>
                    <div>( {blog?.detailsNewsDto?.currentRate} )</div>
                    <AverageRating 
                        value={blog?.detailsNewsDto?.currentRate}
                        size="md" 
                    />
                    +
                    <div>(  {blog?.detailsNewsDto?.commentsCount} )نظرات</div>
                </div>
            </div>
            
            <div className='w-full flex gap-2 items-center justify-center'>
                <div className='hidden md:block'> <CopyUrlButton/> </div>
                <BlogFavorite newsId={newsId} isFav={blog?.detailsNewsDto?.isCurrentUserFavorite} currentUserFavoriteId={blog?.detailsNewsDto?.currentUserFavoriteId} />
                <LikeDislikeBlog likeId={blog?.detailsNewsDto?.likeId} newsId={newsId} currentLikeCount={blog?.detailsNewsDto?.currentUserIsLike} currentDissLikeCount={blog?.detailsNewsDto?.currentUserIsDissLike } />
            </div>
    </div>
  )
}

export { DetailBlogBox }