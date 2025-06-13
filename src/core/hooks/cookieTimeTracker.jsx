
import Cookies from 'js-cookie';

const COOKIE_NAME = 'pageVisitTimes';
const COOKIE_EXPIRATION_DAYS = 30; 

/**
 * * @returns {Object} 
 */
export const getPageViewTimes = () => {
  try {
    const cookieValue = Cookies.get(COOKIE_NAME);
    return cookieValue ? JSON.parse(cookieValue) : {};
  } catch (error) {
    console.error('Error parsing page visit times from cookie:', error);
    return {};
  }
};

/**
 * * @param {string} pagePath - 
 * @param {number} timeToAddMs - 
 */
export const updatePageViewTime = (pagePath, timeToAddMs) => {
  const currentTimes = getPageViewTimes();
  currentTimes[pagePath] = (currentTimes[pagePath] || 0) + timeToAddMs;

  try {
    Cookies.set(COOKIE_NAME, JSON.stringify(currentTimes), { expires: COOKIE_EXPIRATION_DAYS });
  } catch (error) {
    console.error('Error setting page visit times cookie:', error);
  }
};

/**
 * */
export const clearPageViewTimes = () => {
  Cookies.remove(COOKIE_NAME);
  console.log('Page visit times cookie cleared.');
};