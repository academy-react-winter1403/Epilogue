
import Select from "react-select";
import teacherIcon from "../../../assets/teacher.png";

export const InstructorSelect = ({ isLoading, error, uniqueTeachers, setTeacherId }) => {
  return (
    <div className="pb-4">
      <div className="flex gap-2 px-5">
        <div className="w-[24px] h-[24px]">
          <img src={teacherIcon} alt="Teacher Icon" />
        </div>
        <label className="font-medium block mb-[9px] text-base" htmlFor="instructor">
          اساتید
        </label>
      </div>
      {isLoading ? (
        <div>در حال بارگذاری...</div>
      ) : error ? (
        <div>خطا در بارگذاری اساتید: {error.message}</div>
      ) : (
        <Select
          name="instructor"
          options={uniqueTeachers}
          placeholder="استاد مورد نظر را انتخاب کنید"
          onChange={(option) => {
            setTeacherId(option.value);
          }}
          className="react-select-container px-5 w-[450px] md:w-[298px] h-[48px] rounded-lg "
          classNamePrefix="react-select"
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: "#F1F1F1",
              borderRadius: "16px",
              height:"48px"
            }),
          }}
        />
      )}
    </div>
  );
};