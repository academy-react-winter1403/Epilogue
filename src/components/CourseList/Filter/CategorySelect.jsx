import Select from "react-select";
import layersIcon from "../../../assets/layers.png";

export const CategorySelect = ({
  technologyOptions,
  setTechnologies,
  setTechCount,
}) => {
  return (
    <div className="pb-4">
      <div className="flex gap-2 px-5">
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
        className="react-select-container px-5"
        classNamePrefix="react-select"
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "#F1F1F1",
            borderRadius: "16px",
            border: "1px solid #D1D5DB",
            width:"258px",
              height:"48px",
          }),
        }}
      />
    </div>
  );
};
