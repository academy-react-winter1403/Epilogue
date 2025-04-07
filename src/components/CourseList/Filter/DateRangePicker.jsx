
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../../../assets/calendar.png";

export const DateRangePicker = ({ dateRange, setDateRange }) => {
  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <div className="w-[24px] h-[24px]">
          <img src={calendarIcon} alt="Date Icon" />
        </div>
        <label className="font-medium block mb-[9px] text-base" htmlFor="dateRange">
          تاریخ برگزاری - اتمام
        </label>
      </div>
      <div className="flex gap-4 mb-4">
        <DatePicker
          selected={dateRange[0]}
          onChange={(date) => setDateRange([date, dateRange[1]])}
          dateFormat="yyyy/MM/dd"
          placeholderText="تاریخ شروع"
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <DatePicker
          selected={dateRange[1]}
          onChange={(date) => setDateRange([dateRange[0], date])}
          dateFormat="yyyy/MM/dd"
          placeholderText="تاریخ پایان"
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>
    </div>
  );
};