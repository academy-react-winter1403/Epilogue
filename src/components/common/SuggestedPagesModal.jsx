import React, { useEffect, useState, useCallback } from 'react';
import { getPageViewTimes } from '../../core/hooks/cookieTimeTracker';
import { useTranslation } from 'react-i18next';
const MIN_TIME_SECONDS = 300;
const ANIMATION_DURATION_MS = 300;

const SuggestedPagesModal = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation('common');
  const [suggestedPages, setSuggestedPages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
    setTimeout(() => {
      onClose();
    }, ANIMATION_DURATION_MS);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setIsModalVisible(true); 
      const pageTimes = getPageViewTimes();
      const pagesArray = Object.entries(pageTimes)
        .map(([path, data]) => ({
          path,
          time: Math.round(data.totalTime / 1000), 
          lastVisited: data.lastVisited,
        }))
        .filter(page => page.time >= MIN_TIME_SECONDS);
      pagesArray.sort((a, b) => b.time - a.time);
      setSuggestedPages(pagesArray);
    } else {
      handleCloseModal();
    }
  }, [isOpen, handleCloseModal]);
  if (!isOpen && !isModalVisible) return null;

  const handleNavigate = (path) => {
    window.location.href = path;
    handleCloseModal(); 
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'نامشخص';
    const date = new Date(timestamp);
    return date.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div
      className={`
        fixed inset-0 flex justify-center items-center z-50 p-4
        transition-all duration-[${ANIMATION_DURATION_MS}ms] ease-in-out
        ${isModalVisible
          ? 'backdrop-blur-sm bg-white/5 animate-fadeIn'
          : 'bg-opacity-0 animate-fadeOut pointer-events-none'
        }
      `}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleCloseModal();
        }
      }}
    >
      <div
        className={`
          bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg mx-4 border-t-4 border-blue-500
          transform transition-all duration-[${ANIMATION_DURATION_MS}ms] ease-out
          ${isModalVisible
            ? 'scale-100 opacity-100 animate-slideUp'
            : 'scale-95 opacity-0 animate-slideDown'
          }
        `}
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
          <h2 className="text-2xl font-extrabold text-gray-800">{t('suggested')}</h2>
          <button
            onClick={handleCloseModal}
            className="text-gray-500 hover:text-gray-900 text-4xl font-light leading-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full w-10 h-10 flex items-center justify-center"
            aria-label="بستن"
          >
            &times;
          </button>
        </div>
        {suggestedPages.length === 0 ? (
          <p className="text-gray-600 italic py-4 text-center">{t('info')}</p>
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
                <div className="flex flex-col">
                  <span className="text-blue-700 dark:text-blue-300 font-semibold truncate text-lg group-hover:text-blue-900 dark:group-hover:text-blue-200 transition-colors duration-200">{page.path}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    آخرین بازدید: {formatDate(page.lastVisited)}
                  </span>
                </div>
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