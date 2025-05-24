import bahrLogo from "../../assets/bahe-logo.png";
import matn from "../../assets/matn.png";
import lap from "../../assets/lap.png";
import { useTranslation } from 'react-i18next'; 

export function Side() {
  const { t } = useTranslation('auth'); 

  return (
    <div className="max-h-[1280px] w-full rounded-[32px] bg-[#F1F1F1] hidden md:block">
      <div className="flex items-center px-6 py-[38px]">
        <div>
          <img src={bahrLogo} alt="Bahr Logo" /> 
        </div>
        <div>
          <img src={matn} alt="Text Graphic" /> 
        </div>
      </div>

      <h1 className="text-[32px] font-bold py-[0px] px-6">
        {t('startAnAdventure')} 
      </h1>
      <h2 className="text-[20px] text-[#707070] font-semibold py-[16px] px-6">
        {t('findAndLearnCourses')}
      </h2>
      <div className="w-[368px] h-[309px] m-auto mt-5">
        <img src={lap} className="w-full h-full" alt="Laptop illustration" />
      </div>
    </div>
  );
}