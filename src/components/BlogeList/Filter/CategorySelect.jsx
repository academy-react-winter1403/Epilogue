import Select from "react-select";
import layersIcon from "../../../assets/layers.png";
import { useTranslation } from 'react-i18next'; 

export const CategorySelect = ({
  technologyOptions,
  setTechnologies,
  setTechCount,
}) => {
  const { t } = useTranslation('blogList'); 

  return (
    <div className="pb-4">
      <div className="flex gap-2 px-5">
        <div className="w-[24px] h-[24px]">
          <img src={layersIcon} alt={t('category')} /> 
        </div>
        <label
          className="font-medium block mb-[9px] text-base"
          htmlFor="category"
        >
          {t('category')} 
        </label>
      </div>
      <Select
        name="category"
        options={technologyOptions}
        onChange={(option) => {
          console.log(option, "test");
          setTechnologies(option.value);
          setTechCount(1);
        }}
        placeholder={t('selectCategoryPlaceholder')} 
        className="react-select-container text-[14px] px-5 w-[450px] md:w-[278px]"
        classNamePrefix="react-select "
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "#F1F1F1",
            borderRadius: "16px",
            border: "1px solid #D1D5DB",
            height: "48px",
          }),
        }}
      />
    </div>
  );
};