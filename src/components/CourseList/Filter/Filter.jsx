import { Formik, Form } from "formik";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useStore from "../../../core/Store/Zustand-Store";
import { SearchFilter } from "./Search";
import { InstructorSelect } from "./Teachers";
import { CategorySelect } from "./CategorySelect";
import { EducationLevelSelect } from "./EducationLevelSelect";
import { DateRangePicker } from "./DateRangePicker";
import { PriceSlider } from "./PriceSlider";

function Filter({ searchTerm, setSearchTerm, setPriceRange }) {
  const [priceRangeState, setPriceRangeState] = useState([0, 100000000]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [isFormOpen, setFormOpen] = useState(false);

  const { setTeacherId, setTechnologies, setTechCount, setLevelName } =
    useStore((state) => state);

  const {
    data: teachers,
    isLoading,
    error,
  } = useQuery({
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

  return (
    <div>
      {/* حالت عادی */}
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

      {/* حالت md */}
      <div className="block md:hidden">
        <div
          className={`${
            isFormOpen
              ? "w-[258px] h-[625px] animate-slide-up border border-[#DCDCDC] rounded-3xl"
              : "w-[95px] h-[48px] rounded-[40px] bg-gray-200 cursor-pointer flex items-center justify-center"
          }`}
          onClick={() => !isFormOpen && setFormOpen(true)}
        >
          {!isFormOpen && <span>فیلتر</span>}
          {isFormOpen && (
            <div>
              {/* دایوی برای بستن فرم */}
              <div
                style={{
                  width: "101px",
                  height: "40px",
                  borderRadius: "34px",
                  border: "1px solid",
                  padding: "7px 16px",
                  gap: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f0f0f0",
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
                onClick={() => setFormOpen(false)}
              >
                بستن فرم
              </div>

              {/* فرم اصلی */}
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
      </div>
    </div>
  );
}

export default Filter;
