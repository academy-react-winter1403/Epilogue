import React from "react";
import { Link } from "react-router-dom";

const SettingMenuOption = ({ title, url }) => {
  return (
    <a className="pt-7">
      <Link to={url} className="font-bold flex flex-row gap-2 ">
        {title}
      </Link>
    </a>
  );
};

export {SettingMenuOption};
