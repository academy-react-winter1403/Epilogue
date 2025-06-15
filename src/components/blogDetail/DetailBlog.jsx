import React, { useState } from 'react';
import { DetailBlogBox } from './DetailBlogBox';
import { StarRating } from '../common/starRating/StarRating';
import { useTranslation } from 'react-i18next';

const DetailBlog = ({ newsId, blog }) => {
  const { t } = useTranslation('blogList');
  const [aiSummary, setAiSummary] = useState('');
  const [showAiSummary, setShowAiSummary] = useState(false);
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);

  const summarizeTextWithAI = async (text) => {
    setIsLoadingSummary(true);
    setShowAiSummary(false); 
    setAiSummary(''); 

    const apiKey = "AIzaSyCbM-OuxxYDrSr0mZjc3xzYnA1FemvIJI4";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const payload = {
      contents: [
        {
          parts: [
            {
              text: `لطفا این متن را به صورت خلاصه و حداکثر در 500 کاراکتر خلاصه کن: ${text}`,
            },
          ],
        },
      ],
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
        throw new Error("Invalid response structure from API");
      }

      const generatedSummary = data.candidates[0].content.parts[0].text;
      setAiSummary(generatedSummary);
      setShowAiSummary(true);
    } catch (error) {
      console.error("خطا در دریافت خلاصه از AI:", error);
      setAiSummary(t('summaryGenerationError'));
      setShowAiSummary(true); 
    } finally {
      setIsLoadingSummary(false);
    }
  };


const DetailBlog = ({newsId, blog}) => {
   console.log(blog?.detailsNewsDto?.userId,'maybe')

  return (
    <section className="w-full flex flex-col gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 justify-center items-center bg-bg-primary">
      <div className='w-full flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-center lg:w-[90%]'> 
        <div className="w-full md:w-[50%] lg:w-[50%] h-[400px] lg:h-[424px] order-1 lg:order-0"> 
          {blog?.detailsNewsDto?.addUserProfileImage ? (
            <img
              src={blog?.detailsNewsDto?.addUserProfileImage}
              alt={blog?.detailsNewsDto?.title || t('blogImage')}
              className="w-full h-full object-cover rounded-[20px]"
            />
          ) : (
            <div className='w-full h-full rounded-[20px] flex justify-center items-center bg-gray-200'>
              <span className="text-gray-500">{t('noImageAvailable')}</span>
            </div>
          )}
        </div>
        <DetailBlogBox newsId={newsId} blog={blog} /> 
      </div>
      <div className='w-full flex flex-col gap-4 lg:gap-6 justify-center items-start px-0 lg:px-0'> 
        <h2 className="w-full font-dana font-bold text-xl lg:text-2xl leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap">
          {blog?.detailsNewsDto?.title} 
        </h2>
        <div className="w-full font-dana font-medium lg:text-lg text-black text-base leading-normal tracking-normal text-right"> 
          {blog?.detailsNewsDto?.describe}
        </div>

        <div className='mt-8 w-full'> 
          <button
            onClick={() => summarizeTextWithAI(blog?.detailsNewsDto?.describe)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:from-gray-400 disabled:to-gray-500"
            disabled={isLoadingSummary}
          >
            {isLoadingSummary ? t('generatingSummary') : t('summarizeWithAI')}
          </button>

          {showAiSummary && (
            <div className="mt-6 p-5 bg-blue-50 rounded-xl shadow-inner border border-blue-200 animate-fadeIn">
              <h3 className="font-dana font-bold text-xl text-blue-800 mb-3 border-b border-blue-300 pb-2">
                {t('aiSummaryTitle')}
              </h3>
              <p className="font-dana text-gray-800 leading-relaxed text-lg">
                {aiSummary}
              </p>
            </div>
          )}
        </div>

        <div className='w-full mr-50 md:mr-[-40px] md:self-start flex flex-col gap-4 lg:gap-6 justify-center items-start'>
            <h2 className="w-[124px] h-[29px] font-dana font-bold text-xl lg:text-2xl leading-[100%] tracking-[0%] text-right text-gray-800 whitespace-nowrap"> </h2>

            <div className="w-[50%] md:w-full lg:w-full font-dana font-medium lg:text-lg  text-black font-medium text-base  tracking-normal text-righ">{blog?.detailsNewsDto?.describe}</div>


            <div className='flex flex-col mt-10 md:flex-row lg:flex-row gap-5'>
                <div className='flex gap-5 items-center'>
                    <div className="w-[71px] h-[23px] font-dana font-semibold text-[16px] leading-[100%] tracking-[0%] leading-1.5 text-right text-blue-500 whitespace-nowrap">امتیاز بدید</div>
                    <div className=" w-[140px] h-[28px] rotate-180">
                    <StarRating 
                        itemId={newsId}
                        type="blog" 
                        size="md" 
                        currentUserRateNumber={blog?.detailsNewsDto?.currentUserRateNumber}
                    />
                    </div>
                </div>

            </div>
          </div>
        </div>
    </section>

  );
};
};

export { DetailBlog };