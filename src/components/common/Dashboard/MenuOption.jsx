import React from "react";
import { Link } from "react-router-dom";

const MenuOption = ({ title, icon, url }) => {
  return (
    <a className="pt-[30px]">
      <Link to={url} className="font-bold flex flex-row gap-2">
        {icon}
        {title}
      </Link>
    </a>
  );
};

export {MenuOption};
