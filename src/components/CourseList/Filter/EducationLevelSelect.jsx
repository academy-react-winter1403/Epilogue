
import Select from "react-select";
import cellsIcon from "../../../assets/cells.png";

export const EducationLevelSelect = ({  LevelOptions,setLevelName,}) => {
  return (
    <div className="pb-4">
      <div className="flex gap-2 px-5">
        <div className="w-[24px] h-[24px]">
          <img src={cellsIcon} alt="Education Level Icon" />
        </div>
        <label className="font-medium block mb-[9px] text-base" htmlFor="educationLevel">
          سطح آموزشی
        </label>
      </div>
      <Select
        name="educationLevel"
        options={LevelOptions}
        onChange={(option) => {
          console.log(option, "test");
          setLevelName(option.value);
        }}
        placeholder="سطح آموزشی را انتخاب کنید"
        className="react-select-container text-[14px] rounded-2xl px-5 w-[450px] md:w-[298px]"
        classNamePrefix="react-select"
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "#F1F1F1",
            borderRadius: "16px",
            border: "1px solid #D1D5DB",
              height:"48px"
          }),
        }}
      />
    </div>
  );
};