import { useTranslation } from 'react-i18next';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Calendar03Icon } from '../../common/Icons/Calender';

export const DateRangePicker = ({ dateRange, setDateRange }) => {
  const { t } = useTranslation('filter');

  return (
    <div className="mb-4">
      <div className="flex gap-2 px-5">
        <div className="w-[24px] h-[24px]">
          <Calendar03Icon color="#00000" />
        </div>
        <label className="font-medium block pb-[9px] text-base" htmlFor="dateRange">
          {t('dateRangeLabel')}
        </label>
      </div>
      <div className="flex gap-4 px-5">
        <DatePicker
          value={dateRange[0]}
          onChange={(date) => setDateRange([date?.toDate(), dateRange[1]])}
          calendar={persian}
          locale={persian_fa}
          format="YYYY/MM/DD"
          placeholder={t('startDatePlaceholder')}
          inputClass="w-full border text-center border-gray-300 rounded-2xl p-2"
        />
        <DatePicker
          value={dateRange[1]}
          onChange={(date) => setDateRange([dateRange[0], date?.toDate()])}
          calendar={persian}
          locale={persian_fa}
          format="YYYY/MM/DD"
          placeholder={t('endDatePlaceholder')}
          inputClass="w-full border text-center border-gray-300 rounded-2xl p-2"
        />
      </div>
    </div>
  );
};