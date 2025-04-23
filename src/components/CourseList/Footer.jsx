import h1 from "../../assets/h1.svg";
import bahr from "../../assets/bahr.svg";
import twitter from "../../assets/twitter.png";
import telegram from "../../assets/telegram.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";

export function Footer (){
    return(
        <div className="w-[1283px] h-[110.5px] border-t border-t-[#DCDCDC] ml-auto mr-auto mt-[56px]">
            <div className=" mt-[66.5px] h-[38px] flex">
            <div className="flex">
            <div className="w-[42px] h-10"><img src={bahr}/></div>
            <div className="w-[189px] h-[38px] mt-[6px]"><img src={h1}/></div>
            </div>
            <div classNam="flex gap-[56px]">
                <div className="flex gap-[56px] mr-[73px] mt-1">
                <div className="w-[33px] h-[26px] text-lg font-semibold"><h3>خانه</h3></div>
                <div className="w-[54px] h-[26px] text-lg font-semibold"><h3>دورهها</h3></div>
                <div className="w-[56px] h-[26px] text-lg font-semibold"><h3>بلاگها</h3></div>
                <div className="w-[50px] h-[26px] text-lg font-semibold"><h3>اساتید</h3></div>
                <div className="w-[58px] h-[26px] text-lg font-semibold"><h3>دربارهما</h3></div>
                <div className="w-[70px] h-[26px] text-lg font-semibold"><h3>ارتباطباما</h3></div>
                <div className="w-[73px] h-[26px] text-lg font-semibold"><h3>خدمات ما</h3></div></div>
            </div>
            <div className="flex mr-[61px] gap-[24px] mt-1">
                <div className="h-[24px] w-[24px]"><img src={twitter}/></div>
                <div className="h-[24px] w-[24px]"><img src={youtube}/></div>
                <div className="h-[24px] w-[24px]"><img src={telegram}/></div>
                <div className="h-[24px] w-[24px]"><img src={instagram}/></div>
            </div>
            </div>
        </div>
    )
}