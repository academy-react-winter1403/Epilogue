
import Select from "react-select";
import cellsIcon from "../../../assets/cells.png";

export const EducationLevelSelect = ({ educationLevels, setFieldValue, values, setSelectedLevel }) => {
  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <div className="w-[24px] h-[24px]">
          <img src={cellsIcon} alt="Education Level Icon" />
        </div>
        <label className="font-medium block mb-[9px] text-base" htmlFor="educationLevel">
          سطح آموزشی
        </label>
      </div>
      <Select
        name="educationLevel"
        options={educationLevels}
        value={values.educationLevel || null}
        onChange={(option) => {
          setFieldValue("educationLevel", option || null);
          setSelectedLevel(option);
        }}
        placeholder="سطح آموزشی را انتخاب کنید"
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