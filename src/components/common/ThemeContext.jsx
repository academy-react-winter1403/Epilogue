import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  // بارگذاری تم ذخیره‌شده از localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      const hour = new Date().getHours();
      const isDayTime = hour >= 7 && hour <= 19;
      const defaultTheme = isDayTime ? 'light' : 'dark';
      setTheme(defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    }
  }, []);

  // تغییر تم و ذخیره در localStorage
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark', 'green', 'blue', 'pink');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
