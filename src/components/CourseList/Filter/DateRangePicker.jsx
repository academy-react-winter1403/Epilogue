import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar03Icon } from "../../common/Icons/Calender";
import { useTranslation } from 'react-i18next'; 

export const DateRangePicker = ({ dateRange, setDateRange }) => {
  const { t } = useTranslation('filter'); 

  return (
    <div className="mb-4">
      <div className="flex gap-2 px-5">
        <div className="w-[24px] h-[24px]">
          <Calendar03Icon color={"#00000"}/>
        </div>
        <label className="font-medium block pb-[9px] text-base" htmlFor="dateRange">
          {t('dateRangeLabel')}
        </label>
      </div>
      <div className="flex gap-4 px-5">
        <DatePicker
          selected={dateRange[0]}
          onChange={(date) => setDateRange([date, dateRange[1]])}
          dateFormat="yyyy/MM/dd"
          placeholderText={t('startDatePlaceholder')}
          className="w-full border text-center border-gray-300 rounded-2xl p-2"
        />
        <DatePicker
          selected={dateRange[1]}
          onChange={(date) => setDateRange([dateRange[0], date])}
          dateFormat="yyyy/MM/dd"
          placeholderText={t('endDatePlaceholder')}
          className="w-full border text-center border-gray-300 rounded-2xl p-2"
        />
      </div>
    </div>
  );
};