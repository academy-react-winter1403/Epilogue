
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { updatePageViewTime } from './cookieTimeTracker';
export const usePageTimeTracker = () => {
  const location = useLocation();
  const startTimeRef = useRef(performance.now()); 
  const previousPathRef = useRef(location.pathname); 

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath !== previousPathRef.current) {
      const timeSpent = performance.now() - startTimeRef.current;
      updatePageViewTime(previousPathRef.current, timeSpent); 
      
      startTimeRef.current = performance.now()
      previousPathRef.current = currentPath; 
    }
    return () => {
      const timeSpent = performance.now() - startTimeRef.current;
      updatePageViewTime(currentPath, timeSpent)
    };
  }, [location.pathname]); 
  useEffect(() => {
    const handleBeforeUnload = () => {
      const currentPath = location.pathname;
      const timeSpent = performance.now() - startTimeRef.current;
      updatePageViewTime(currentPath, timeSpent);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.pathname]);
};