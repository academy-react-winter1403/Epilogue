
import Select from "react-select";
import teacherIcon from "../../../assets/teacher.png";

export const InstructorSelect = ({ isLoading, error, uniqueTeachers, setTeacherId }) => {
  return (
    <div className="mb-6">
      <div className="flex gap-2">
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
      )}
    </div>
  );
};