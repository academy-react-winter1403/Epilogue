// src/components/SuggestedPagesModal.js
import React, { useEffect, useState } from 'react';
import { getPageViewTimes } from '../../core/hooks/cookieTimeTracker';

const MIN_TIME_SECONDS = 300; 
const SuggestedPagesModal = ({ isOpen, onClose }) => {
  const [suggestedPages, setSuggestedPages] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const pageTimes = getPageViewTimes();
      const pagesArray = Object.entries(pageTimes)
        .map(([path, time]) => ({
          path,
          time: Math.round(time / 1000), 
        }))
        .filter(page => page.time >= MIN_TIME_SECONDS); 
      pagesArray.sort((a, b) => b.time - a.time);
      setSuggestedPages(pagesArray);
    }
  }, [isOpen]);

  if (!isOpen) return null; 

  const handleNavigate = (path) => {
    window.location.href = path;
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 animate-fadeIn">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg mx-4 transform transition-all duration-300 ease-out animate-slideUp border-t-4 border-blue-500">
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
          <h2 className="text-2xl font-extrabold text-gray-800">صفحات پیشنهادی</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 text-4xl font-light leading-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full w-10 h-10 flex items-center justify-center"
            aria-label="بستن"
          >
            &times;
          </button>
        </div>
        {suggestedPages.length === 0 ? (
          <p className="text-gray-600 italic py-4 text-center">هنوز اطلاعاتی برای نمایش وجود ندارد یا زمان بازدید صفحات کافی نیست.</p>
        ) : (
          <ul className="space-y-3 mt-4">
            {suggestedPages.map((page, index) => (
              <li
                key={index}
                className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 
                           hover:from-blue-100 hover:to-indigo-100 dark:hover:from-gray-600 dark:hover:to-gray-700 
                           rounded-xl cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-[1.01] 
                           flex justify-between items-center group shadow-sm hover:shadow-md"
                onClick={() => handleNavigate(page.path)} 
              >
                <span className="text-blue-700 dark:text-blue-300 font-semibold truncate text-lg group-hover:text-blue-900 dark:group-hover:text-blue-200 transition-colors duration-200">{page.path}</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm ml-2 bg-blue-200 dark:bg-blue-800 px-3 py-1 rounded-full group-hover:bg-blue-300 dark:group-hover:bg-blue-700 transition-colors duration-200 font-medium">
                  {page.time} ثانیه
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SuggestedPagesModal;