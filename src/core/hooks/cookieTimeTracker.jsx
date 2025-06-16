import Cookies from 'js-cookie';

const COOKIE_NAME = 'pageVisitTimes';
const COOKIE_EXPIRATION_DAYS = 30;

/**
 * @returns {Object} 
 */
export const getPageViewTimes = () => {
  try {
    const cookieValue = Cookies.get(COOKIE_NAME);
    const parsedValue = cookieValue ? JSON.parse(cookieValue) : {};
    for (const path in parsedValue) {
      if (typeof parsedValue[path] === 'number') {
        parsedValue[path] = { totalTime: parsedValue[path], lastVisited: Date.now() }; 
      } else if (parsedValue[path] === null || typeof parsedValue[path] !== 'object' || !('totalTime' in parsedValue[path]) || !('lastVisited' in parsedValue[path])) {
        parsedValue[path] = { totalTime: 0, lastVisited: 0 };
      }
    }
    return parsedValue;
  } catch (error) {
    console.error('Error parsing page visit times from cookie:', error);
    return {};
  }
};

/**
 * @param {string} pagePath چ
 * @param {number} timeToAddMs 
 */
export const updatePageViewTime = (pagePath, timeToAddMs) => {
  const currentTimes = getPageViewTimes();
  if (!currentTimes[pagePath]) {
    currentTimes[pagePath] = { totalTime: 0, lastVisited: 0 };
  }

  currentTimes[pagePath].totalTime = (currentTimes[pagePath].totalTime || 0) + timeToAddMs;
  currentTimes[pagePath].lastVisited = Date.now(); 

  try {
    Cookies.set(COOKIE_NAME, JSON.stringify(currentTimes), { expires: COOKIE_EXPIRATION_DAYS });
  } catch (error) {
    console.error('Error setting page visit times cookie:', error);
  }
};
export const clearPageViewTimes = () => {
  Cookies.remove(COOKIE_NAME);
  console.log('Page visit times cookie cleared.');
};