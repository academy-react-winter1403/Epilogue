import Select from "react-select";
import layersIcon from "../../../assets/layers.png";

export const CategorySelect = ({
  technologyOptions,
  setTechnologies,
  setTechCount,
}) => {
  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <div className="w-[24px] h-[24px]">
          <img src={layersIcon} alt="Category Icon" />
        </div>
        <label
          className="font-medium block mb-[9px] text-base"
          htmlFor="category"
        >
          دسته بندی
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
        placeholder="دسته مورد نظر را انتخاب کنید"
        className="react-select-container"
        classNamePrefix="react-select"
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "#F1F1F1",
            borderRadius: "0.5rem",
            border: "1px solid #D1D5DB",
          }),
        }}
      />
    </div>
  );
};
