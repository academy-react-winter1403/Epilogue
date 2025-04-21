import React, { useEffect, useState } from "react";
import { Moon02Icon } from "./Icons/MoonIcon";

const ThemeToggle = () => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    const hour = new Date().getHours();
    const isDayTime = hour >= 7 && hour <= 19;
    return isDayTime ? "light" : "dark";
  };

  const [theme, setTheme] = useState(getInitialTheme); 
  const [isLoaded, setIsLoaded] = useState(false); 

  useEffect(() => {
    document.documentElement.classList.add("hidden");

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);

    setIsLoaded(true);
    document.documentElement.classList.remove("hidden");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      <div onClick={toggleTheme}>
        <Moon02Icon />
      </div>
    </div>
  );
};

export default ThemeToggle;
