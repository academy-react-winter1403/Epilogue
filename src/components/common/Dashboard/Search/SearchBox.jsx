import React from "react";
import { Search01Icon } from "../../Icons/SearchIcon";
import { Field, Formik } from "formik";
import { useTranslation } from 'react-i18next'; 

const SearchBox = () => {
  const { t } = useTranslation('dashboard'); 

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex flex-row gap-2">
        <Search01Icon color={"00000"} />
        <p className="text-[14px] text-black">{t('search')}</p> 
      </div>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values) => {
          console.log(values.search);
        }}
      >
        {({ handleSubmit }) => ( 
          <form onSubmit={handleSubmit}>
            <Field
              type="search"
              name="search" 
              className="w-[258px] h-[48px] rounded-2xl bg-[#F1F1F1]"
              placeholder={t('search')} 
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBox;