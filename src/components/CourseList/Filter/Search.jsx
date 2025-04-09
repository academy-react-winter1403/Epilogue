import { Field } from "formik";
import search from "../../../assets/search.png";
import search2 from "../../../assets/search2.png";

export const SearchFilter = ({ searchTerm, setSearchTerm, setFieldValue }) => {
  return (
    <div className="mb-6 rounded-4 border border-[#F1F1F1] ">
      <div className="flex gap-2">
        <div className="w-[24px] h-[24px]">
          <img src={search} alt="Search Icon" />
        </div>
        <label className="font-medium block mb-[9px] text-base" htmlFor="search">
          جست و جو
        </label>
      </div>
      <div className="relative flex items-center">
        <div className="absolute left-0 flex items-center justify-center bg-blue-500 w-12 h-12 rounded-[16px]">
          <img src={search2} alt="Search Icon" className="w-6 h-6 text-white" />
        </div>
        <Field name="search">
          {({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="دوره مورد نظر را جست‌جو کنید..."
              className="bg-[#F1F1F1] w-full h-12 p-2 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium text-xs"
              value={searchTerm}
              onChange={(e) => {
                const value = e.target.value;
                setSearchTerm(value);
                setFieldValue("search", value);
              }}
            />
          )}
        </Field>
      </div>
    </div>
  );
};