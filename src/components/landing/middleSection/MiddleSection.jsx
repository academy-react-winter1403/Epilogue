import React from "react";
import estedad from "../../../assets/img/estedad.png";
import rahnama from "../../../assets/img/rahnama.png";
import amozesh from "../../../assets/img/amozesh.png";
import cv from "../../../assets/img/cv.png";
import Line from "../../../assets/img/Line.png";
import { TaskDaily01Icon } from "../../common/Icons/TaskIcon";
import { DocumentValidationIcon } from "../../common/Icons/Document-validationIcon";
import { MessageUser01Icon } from "../../common/Icons/Message-userIcon";
import { JobLinkIcon } from "../../common/Icons/Job-Link";

const MiddleSection = () => {
  return (
    <div className="w-auto px-[41px]">
      <div className=" pt-[118px] font-yekan-700 flex flex-col font-bold items-center justify-center pb-[46px] text-nowrap text-[32px]">
        اهداف ما در آکادامی
      </div>

      <div className="flex flex-col  items-center justify-center lg:flex-row gap-[25px]">
        <img src={Line} className=" lg:flex hidden absolute" />

        <div class="w-[100%] z-10 h-[434px] lg:max-w-[321px] bg-white border-2 cursor-pointer border-[#DCDCDC] rounded-[24px] hover:border-2 hover:border-[#3772FF]">
          <div class="p-5">
            <h5 class="pb-[21px] text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
              استعدادیابی
            </h5>
            <p class=" text-[16px] font-yekan-500 text-[#7E7E7E] ">
              یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی صرف
              نظر از سن ، رشته تحصیلی ، جغرافیا و جنسیت و ...
            </p>
            <img class="m-auto py-8" src={estedad} />
          </div>
        </div>

        <div class="w-[100%] z-10 h-[434px] lg:max-w-[321px] bg-white border-2 cursor-pointer border-[#DCDCDC] rounded-[24px] hover:border-2 hover:border-[#3772FF] ">
          <div class="p-5">
            <h5 class="pb-[21px] text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
              راهنمایی و ایجاد انگیزه
            </h5>
            <p class=" text-[16px] font-yekan-500 text-[#7E7E7E] ">
              آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور
              برای تحریک ذهنیت خلاق در طول فرآیند آموزش
            </p>
            <img class="m-auto py-6" src={rahnama} alt="" />
          </div>
        </div>

        <div class="w-[100%] z-10 h-[434px] lg:max-w-[321px] bg-white border-2 cursor-pointer border-[#DCDCDC] rounded-[24px] hover:border-2 hover:border-[#3772FF] ">
          <div class="p-5">
            <h5 class="pb-[21px] text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
              آموزش‌های تخصصی
            </h5>
            <p class="m text-[16px] font-yekan-500 text-[#7E7E7E] ">
              کارگاه های تخصصی و تکمیلی برای کار با پلتفرم های بازاری مورد اقبال
              و برگزاری تورنمت های تیمی رقابتی برای تقویت روحیه کار تیمی و ...
            </p>
            <img class="m-auto py-8" src={amozesh} alt="" />
          </div>
        </div>

        <div class="w-[100%] z-10 h-[434px] lg:max-w-[321px] bg-white border-2 cursor-pointer border-[#DCDCDC] rounded-[24px] hover:border-2 hover:border-[#3772FF] ">
          <div class="p-5">
            <h5 class="pb-[21px] text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
              آماده سازی برای بازار کار
            </h5>
            <p class=" text-[16px] font-yekan-500 text-[#7E7E7E] ">
              جلسات تنظیم cv برای ساخت‌واشتراک رزومه فنی دربسترهای داخلی و بین
              المللی کاریابی و آماده سازی برای شرکت ها{" "}
            </p>
            <img class="m-auto py-8" src={cv} alt="" />
          </div>
        </div>
      </div>

      {/* part2 */}

      <div className=" pt-[118px]  pb-[46px] text-nowrap text-[32px] ">
        <a className="flex flex-col items-center justify-center pb-[50px]">
          <a className="font-yekan-700 font-bold">خدماتی که ما در طی دوره‌ها</a>
          <a className="font-yekan-700 font-bold">به شما ارائه میدهیم</a>
        </a>

        <div className="grid grid-cols-1  lg:grid-cols-2 gap-[32px]">
          <div class="w-full group max-h-[361px] lg:max-w-[664px] lg:min-h-[144px] cursor-pointer bg-[#F6F6F6] border-2 border-[#DCDCDC] rounded-[24px] hover:border-2 hover:border-[#3772FF]">
            <div class="p-5 flex flex-col lg:flex-row">
              <div className=" max-w-[85px] h-[85px] bg-[#FCFCFC] rounded-full border-2 border-[#DCDCDC] hover:border-2 group-hover:border-[#4a6eec]">
                <div className="p-5 m-auto">
                  <DocumentValidationIcon />
                </div>
              </div>
              <div className="flex flex-col overflow-hidden break-words whitespace-normal px-5 py-3">
                <h5 class="mb-2 text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
                  مدرک معتبر
                </h5>
                <p class="mb-3 text-[16px] font-yekan-500 text-[#7E7E7E] ">
                  با مدرک ما میتوانید به راحتی در همه جا استخدام بشید
                </p>
              </div>
            </div>
          </div>

          <div class="w-full group max-h-[361px] lg:max-w-[664px] lg:min-h-[144px] cursor-pointer bg-[#F6F6F6] border-2 border-[#DCDCDC]  rounded-[24px] hover:border-2 hover:border-[#EC4D4A] ">
            <div class="p-5 flex flex-col lg:flex-row">
              <div className="max-w-[85px] h-[85px] bg-[#FCFCFC] rounded-full border-2 border-[#DCDCDC] hover:border-2 group-hover:border-[#EC4D4A]">
                <div className="p-5 m-auto">
                  <TaskDaily01Icon />
                </div>
              </div>
              <div className="flex flex-col overflow-hidden break-words whitespace-normal px-5 py-3">
                <h5 class="mb-2 text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
                  آزمون ها
                </h5>
                <p class="mb-3 text-[16px] font-yekan-500 text-[#7E7E7E] ">
                  با آزمون های تعیین سطح شما میتوانید سطح دانش خودتون رو بسنجید{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="w-full group max-h-[361px] lg:max-w-[664px] lg:min-h-[144px] cursor-pointer bg-[#F6F6F6] border-2 border-[#DCDCDC]  rounded-[24px] hover:border-2 hover:border-[#ECAC4A] ">
            <div class="p-5 flex flex-col lg:flex-row">
              <div className="max-w-[85px] h-[85px] bg-[#FCFCFC] rounded-full border-2 border-[#DCDCDC] hover:border-2 group-hover:border-[#ECAC4A]">
              <div className="p-5 m-auto">
                  <MessageUser01Icon/>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden break-words whitespace-normal px-5 py-3">
                <h5 class="mb-2 text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
                  مشاوره 24 ساعته
                </h5>
                <p class="mb-3 text-[16px] font-yekan-500 text-[#7E7E7E] ">
                  مشاورین ما 24 ساعته جوابگو سوال های شما هستند{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="w-full group max-h-[361px] lg:max-w-[664px] lg:min-h-[144px] cursor-pointer bg-[#F6F6F6] border-2 border-[#DCDCDC]  rounded-[24px] hover:border-2 hover:border-[#EC4AC9] ">
            <div class="p-5 flex flex-col lg:flex-row">
              <div className="max-w-[85px] h-[85px] bg-[#FCFCFC] rounded-full border-2 border-[#DCDCDC] hover:border-2 group-hover:border-[#EC4AC9]">
              <div className="p-5 m-auto">
                  <JobLinkIcon/>
                </div>              </div>
              <div className="flex flex-col w-[80%] overflow-hidden break-words whitespace-normal px-5 py-3">
                <h5 class="mb-2 text-[20px] font-yekan-700 font-bold tracking-tight text-gray-900">
                  فرصت‌های شغلی
                </h5>
                <p class=" text-[16px] font-yekan-500  text-[#7E7E7E] ">
                  با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده
                  میشه
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
