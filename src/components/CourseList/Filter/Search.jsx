import { Field } from "formik";
import search from "../../../assets/search.png";
import search2 from "../../../assets/search2.png";
import { useTranslation } from 'react-i18next'; 

export const SearchFilter = ({ searchTerm, setSearchTerm, setFieldValue }) => {
  const { t } = useTranslation('filter'); 

  return (
    <div className="pb-4 rounded-4">
      <div className="flex gap-2 px-5">
        <div className="w-[24px] h-[24px]">
          <img src={search} alt={t('search')} /> 
        </div>
        <p
          className="font-medium  block mb-[9px] text-base"
          htmlFor="search"
        >
          {t('search')} 
        </p>
      </div>
      <div className="relative flex items-center px-5">
        <div className="absolute left-5 flex items-center justify-center bg-[#3772FF] w-12 h-12 rounded-[16px]">
          <img src={search2} alt={t('search')} className="w-6 h-6 text-white" /> 
        </div>
        <Field name="search">
          {({ field }) => (
            <input
              {...field}
              type="text"
              placeholder={t('searchCoursePlaceholder')}
              className="bg-[#F1F1F1] themed-dash-input p-2 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium text-xs w-[410px] h-[48px] rounded-2xl"
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