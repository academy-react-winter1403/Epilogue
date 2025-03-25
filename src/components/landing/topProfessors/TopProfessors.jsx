import React, { useEffect, useState } from "react";
import VectorT from "../../../assets/img/VectorT.png";
import VectorVertical from "../../../assets/img/VectorVertical.png";

import { getTeacher } from "../../../core/services/api/LandingApi/getTeacher";

const TopProfessors = () => {
  const [teacherlist, setteacherlist] = useState([]);

  const getTeacherlist = async () => {
    const teacherlist = await getTeacher();
    setteacherlist(teacherlist);
    console.log(teacherlist, "Teacher");
  };
  useEffect(() => {
    getTeacherlist();
  }, []);

  return (
    <div className=" flex flex-col lg:flex-row text-white p-8 min-h-[420px] rounded-[32px] bg-[#2F2F2F]">
      <div className="text-white py-14 px-10 ">
        <p className="font-bold font-yekan-700 pb-6 text-[24px]">اساتید برتر هفته آکادمی</p>
        <p className="max-w-[527px] font-yekan-500 overflow-hidden break-words whitespace-normal text-[20px]">
          در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر خود
          تقدیر کند. این اساتید با دانش عمیق و تجربه گسترده خود در زمینه‌های
          مختلف برنامه‌نویسی، نه تنها به ارتقاء مهارت‌های دانشجویان کمک
          کرده‌اند، بلکه با برگزاری کارگاه‌ها و جلسات مشاوره، فضایی پویا و
          انگیزشی را برای یادگیری فراهم آورده‌اند.
        </p>
        <button className="bg-[#3772FF] font-yekan-500 cursor-pointer w-[119px] mt-6 h-[39px] text-white rounded-[40px]">
          صفحه اساتید
        </button>
      </div>

      <div className="w-[361px] flex flex-col relative sm:flex-row lg:w-[768px] lg:min-h-[351px] min-h-[700px] m-auto bg-[#353535] rounded-[24px] ">
        <div className="w-full h-full flex items-center justify-center absolute inset-0 ">
          <img className="w-full h-full sm:object-contain hidden sm:block " src={VectorT} />
          <img className="w-full h-full object-contain block sm:hidden " src={VectorVertical} />
        </div>
        {teacherlist.length > 0 ? (
          teacherlist
            .filter((teacher) => teacher.teacherId === 1)
            .map((teacher) => (
              <div className=" pb-[130px] sm:pb-0 sm:pt-[120px] pt-[64px] pr-[85px]  w-[153px]  h-[153px]">
                <div className="felx flex-col absolute w-40 h-40">
                  <div className="w-[88px] h-[88px] m-auto">
                    <img
                      src={teacher.pictureAddress}
                      className="rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white pt-[10px] font-yekan-700 text-[16px] px-8 m-auto">
                      4.2
                    </p>
                    <p className="text-white font-yekan-500 text-[16px] m-auto">
                      {teacher.fullName}
                    </p>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <p className="text-white text-center w-full mt-6">
            در حال بارگذاری...
          </p>
        )}

        {teacherlist.length > 0 ? (
          teacherlist
            .filter((teacher) => teacher.teacherId === 63)
            .map((teacher) => (
              <div className=" pt-[60px] pr-[85px] sm:pr-[100px] w-[153px]  h-[153px]">
                <div className="felx flex-col absolute  w-40 h-40">
                  <div className="w-[88px] h-[88px] m-auto">
                    <img
                      src={teacher.pictureAddress}
                      className="rounded-full"
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-white font-yekan-700 pt-[10px] text-[16px] px-8 m-auto">
                      4.8
                    </p>
                    <p className="text-white font-yekan-500 text-[16px] m-auto">
                      {teacher.fullName}
                    </p>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <p className="text-white text-center w-full mt-6">
            در حال بارگذاری...
          </p>
        )}

        {teacherlist.length > 0 ? (
          teacherlist
            .filter((teacher) => teacher.teacherId === 20205)
            .map((teacher) => (
              <div className=" pt-[120px]  pr-[85px] sm:pr-[110px] w-[153px]  h-[153px]">
                <div className="felx flex-col absolute  w-40 h-40">
                  <div className="w-[88px] h-[88px] m-auto">
                    <img
                      src={teacher.pictureAddress}
                      className="rounded-full"
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-white font-yekan-700 pt-[10px] text-[16px] px-8 m-auto">
                      4.1
                    </p>
                    <p className="text-white font-yekan-500 text-[16px] m-auto">
                      {teacher.fullName}
                    </p>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <p className="text-white text-center w-full mt-6">
            در حال بارگذاری...
          </p>
        )}
      </div>
    </div>
  );
};

export default TopProfessors;
