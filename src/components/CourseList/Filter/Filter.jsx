import { Formik, Form } from "formik";
import { useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import gsap from "gsap";
import useStore from "../../../core/Store/Zustand-Store";
import cancel from '../../../assets/cancel.png'
import { SearchFilter } from "./Search";
import { InstructorSelect } from "./Teachers";
import { CategorySelect } from "./CategorySelect";
import { EducationLevelSelect } from "./EducationLevelSelect";
import { DateRangePicker } from "./DateRangePicker";
import { PriceSlider } from "./PriceSlider";
import filter from '../../../assets/filter.png'

function Filter({ searchTerm, setSearchTerm, setPriceRange }) {
  const [priceRangeState, setPriceRangeState] = useState([0, 100000000]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [isFormOpen, setFormOpen] = useState(false);
  const modalRef = useRef(null);

  const { setTeacherId, setTechnologies, setTechCount, setLevelName } =
    useStore((state) => state);

  const { data: teachers, isLoading, error } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://classapi.sepehracademy.ir/api/Home/GetTeachers"
        );
        return response.data;
      } catch (error) {
        console.error("خطا در بارگذاری اساتید:", error);
        throw error;
      }
    },
  });

  const { data: technologieses } = useQuery({
    queryKey: ["technologies"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://classapi.sepehracademy.ir/api/Home/GetTechnologies"
        );
        return response.data;
      } catch (error) {
        console.error("خطا در بارگذاری تکنولوژی‌ها:", error);
        throw error;
      }
    },
  });

  const { data: levelName } = useQuery({
    queryKey: ["levelName"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://classapi.sepehracademy.ir/api/CourseLevel/GetAllCourseLevel"
        );
        return response.data;
      } catch (error) {
        console.error("خطا در بارگذاری دسته بندی:", error);
        throw error;
      }
    },
  });

  const technologyOptions = technologieses?.map((e) => ({
    value: e?.id,
    label: e?.techName,
  }));

  const uniqueTeachers = teachers?.map((teacher) => ({
    value: teacher?.teacherId,
    label: teacher?.fullName,
  }));

  const LevelOptions = levelName?.map((e) => ({
    value: e?.id,
    label: e?.levelName,
  }));

  const openForm = () => {
    setFormOpen(true);
    gsap.fromTo(
      modalRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
    );
  };

  const closeForm = () => {
    gsap.to(modalRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.6,
      ease: "power3.in",
      onComplete: () => setFormOpen(false),
    });
  };

  return (
    <div>

      <div className="hidden md:block">
        <div
          className={`w-[298px] h-[665px] border border-[#DCDCDC] rounded-3xl`}
        >
          <h1 className="font-bold text-2xl mt-4 mr-5">فیلتر</h1>
          <Formik
            initialValues={{
              search: "",
              instructor: null,
              Level: null,
              category: null,
              price: priceRangeState,
              dateRange: dateRange,
            }}
            onSubmit={(values) => {
              console.log(values);
              console.log(
                `Selected Price Range: ${values.price[0]} - ${values.price[1]}`
              );
            }}
          >
            {({ setFieldValue, values }) => (
              <Form className="pt-6">
                <SearchFilter
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  setFieldValue={setFieldValue}
                />
                <InstructorSelect
                  isLoading={isLoading}
                  error={error}
                  uniqueTeachers={uniqueTeachers}
                  setTeacherId={setTeacherId}
                />
                <CategorySelect
                  technologyOptions={technologyOptions}
                  setTechnologies={setTechnologies}
                  setTechCount={setTechCount}
                />
                <EducationLevelSelect
                  LevelOptions={LevelOptions}
                  setLevelName={setLevelName}
                />

                <PriceSlider
                  priceRange={priceRangeState}
                  setPriceRange={setPriceRangeState}
                />
                <DateRangePicker
                  dateRange={dateRange}
                  setDateRange={setDateRange}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="block md:hidden">
        <div
          ref={modalRef}
          className={`fixed bottom-0 left-0 w-full bg-transparent z-50 flex justify-center items-end`}
        >
          {isFormOpen && (
            <div
              className="bg-white p-4 rounded-xl relative shadow-lg"
              style={{
                width: "100%",
                border: "1px solid #ccc",
                maxHeight: "90%",
              }}
            >

              <div className="w-[80px] h-[4px] bg-gray-500 mx-auto mt-2 cursor-grab"></div>

              <div
                className="absolute top-5 left-8 cursor-pointer border border-red-500 p-1 rounded-md flex text-red-500"
                onClick={closeForm}
              >
                <img src={cancel} alt="بستن" />
                بستن
              </div>

              <Formik
                initialValues={{
                  search: "",
                  instructor: null,
                  Level: null,
                  category: null,
                  price: priceRangeState,
                  dateRange: dateRange,
                }}
                onSubmit={(values) => {
                  console.log(values);
                  console.log(
                    `Selected Price Range: ${values.price[0]} - ${values.price[1]}`
                  );
                }}
              >
                {({ setFieldValue, values }) => (
                  <Form>
                    <SearchFilter
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                      setFieldValue={setFieldValue}
                    />
                    <InstructorSelect
                      isLoading={isLoading}
                      error={error}
                      uniqueTeachers={uniqueTeachers}
                      setTeacherId={setTeacherId}
                    />
                    <CategorySelect
                      technologyOptions={technologyOptions}
                      setTechnologies={setTechnologies}
                      setTechCount={setTechCount}
                    />
                    <EducationLevelSelect
                      LevelOptions={LevelOptions}
                      setLevelName={setLevelName}
                    />
                    <DateRangePicker
                      dateRange={dateRange}
                      setDateRange={setDateRange}
                    />
                    <PriceSlider
                      priceRange={priceRangeState}
                      setPriceRange={setPriceRangeState}
                    />
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </div>
        {!isFormOpen && (
                  <div
                    className="w-[95px] h-[48px] rounded-[40px] bg-[#2F2F2F] flex text-[#FCFCFC] cursor-pointer flex items-center justify-center"
                    onClick={openForm}
                  >
                    <img src={filter}/>
                    <span>فیلتر</span>
                  </div>
        )}
      </div>
    </div>
  );
}

export default Filter;