import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import moneyIcon from "../../../assets/money.png";
import useStore from "../../../core/Store/Zustand-Store";

export const PriceSlider = () => {
  const { priceRange, setPriceRange } = useStore((state) => state);

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <div className="w-[24px] h-[24px]">
          <img src={moneyIcon} alt="Money Icon" />
        </div>
        <label className="font-medium block mb-[9px] text-base" htmlFor="price">
          قیمت
        </label>
      </div>
      <Slider
        range
        min={0}
        max={100000000}
        value={priceRange}
        onChange={handlePriceChange}
        className="mt-2"
      />
      <div className="flex justify-between">
        <span>{priceRange[0]} تومان</span>
        <span>{priceRange[1]} تومان</span>
      </div>
    </div>
  );
};