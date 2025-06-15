import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import moneyIcon from "../../../assets/money.png";
import useStore from "../../../core/Store/Zustand-Store";
import { useTranslation } from 'react-i18next'; 

export const PriceSlider = () => {
  const { t } = useTranslation('filter'); 
  const { priceRange, setPriceRange } = useStore((state) => state);

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  const wrapperStyle = {paddingRight : 30,paddingLeft : 30};

  return (
    <div className="pb-6">
      <div className="flex gap-2 px-5">
        <div className="w-[24px] h-[24px]">
          <img src={moneyIcon} alt={t('price')} />
        </div>
        <label className="font-medium block mb-[9px] text-base" htmlFor="price">
          {t('price')}
        </label>
      </div>
      <div style={wrapperStyle}>
        <Slider
          range
          min={0}
          max={100000000}
          value={priceRange}
          onChange={handlePriceChange}
          className="pt-2 px-5 w-[450px] md:w-[300px] "
        />
      </div>

      <div className="flex justify-between px-5 pt-3">
        <span>{priceRange[0]} {t('from')}</span> 
        <span>{priceRange[1]} {t('to')}</span> 
      </div>
    </div>
  );
};