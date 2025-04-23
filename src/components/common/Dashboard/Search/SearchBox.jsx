import React from "react";
import { Search01Icon } from "../../Icons/SearchIcon";
import { Field, Formik } from "formik";

const SearchBox = () => {
  return (
    <div className="flex flex-col  gap-2  p-2">
      <div className=" flex flex-row gap-2">
        <Search01Icon color={"00000"} />
        <p className="text-[14px]  text-black">جست‌جو</p>
      </div>
      <Formik>
        <Field
          type="search"
          className=" w-[258px] h-[48px] rounded-2xl bg-[#F1F1F1]"
        />
      </Formik>
    </div>
  );
};

export default SearchBox;
