import { Formik, Form } from "formik";
import { useState, useRef, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";
import axios from "axios";
import gsap from "gsap";
import useStore from "../../../core/Store/Zustand-Store";
import cancel from '../../../assets/cancel.png';
import { SearchFilter } from "./Search";
import { InstructorSelect } from "./Teachers";
import { CategorySelect } from "./CategorySelect";
import { EducationLevelSelect } from "./EducationLevelSelect";
import { DateRangePicker } from "./DateRangePicker";
import { PriceSlider } from "./PriceSlider";
import filterIcon from '../../../assets/filter.png'; 
import { useTranslation } from 'react-i18next'; 

function Filter({ searchTerm, setSearchTerm, setPriceRange }) {
  const [priceRangeState, setPriceRangeState] = useState([0, 100000000]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [isFormOpen, setFormOpen] = useState(false);
  const modalRef = useRef(null);

  const { t } = useTranslation('filter'); 

  const { setTeacherId, setTechnologies, setTechCount, setLevelName } =
    useStore((state) => state);

  const { data: teachers, isLoading: isLoadingTeachers, error: errorTeachers } = useQuery({ 
    queryKey: ["teachers"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://classapi.sepehracademy.ir/api/Home/GetTeachers"
        );
        return response.data;
      } catch (error) {
        console.error(t('errorLoadingTeachers'), error);
        throw error;
      }
    },
  });

  const { data: technologieses, isLoading: isLoadingTechnologies, error: errorTechnologies } = useQuery({ 
    queryKey: ["technologies"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://classapi.sepehracademy.ir/api/Home/GetTechnologies"
        );
        return response.data;
      } catch (error) {
        console.error(t('errorLoadingTechnologies'), error);
        throw error;
      }
    },
  });

  const { data: levelName, isLoading: isLoadingLevels, error: errorLevels } = useQuery({ 
    queryKey: ["levelName"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://classapi.sepehracademy.ir/api/CourseLevel/GetAllCourseLevel"
        );
        return response.data;
      } catch (error) {
        console.error(t('errorLoadingCategories'), error);
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

  const debouncedSearch = useCallback(
    debounce((value) => {
      console.log("✅ جستجو انجام شد برای:", value); 
      setSearchTerm(value);
    }, 500),
    []
  );

  return (
    <div>
      {/* Desktop Filter */}
      <div className="hidden md:block">
        <div
          className={`w-[298px] h-[665px] border border-[#DCDCDC] rounded-3xl`}
        >
          <h1 className="font-bold text-2xl mt-4 mr-5">{t('filterTitle')}</h1>
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
                  setSearchTerm={(value) => debouncedSearch(value)}
                  setFieldValue={setFieldValue}
                />
                {isLoadingTeachers ? (
                  <p className="text-gray-500 text-center mt-4">{t('loadingTeachers')}</p>
                ) : errorTeachers ? (
                  <p className="text-red-500 text-center mt-4">{t('errorLoadingTeachers', { message: errorTeachers.message })}</p>
                ) : (
                  <InstructorSelect teachers={uniqueTeachers} setTeacherId={setTeacherId} />
                )}
                {isLoadingTechnologies ? (
                  <p className="text-gray-500 text-center mt-4">{t('loadingTechnologies')}</p>
                ) : errorTechnologies ? (
                  <p className="text-red-500 text-center mt-4">{t('errorLoadingTechnologies', { message: errorTechnologies.message })}</p>
                ) : (
                  <CategorySelect technologyOptions={technologyOptions} setTechnologies={setTechnologies} setTechCount={setTechCount} />
                )}
                {isLoadingLevels ? (
                  <p className="text-gray-500 text-center mt-4">{t('loadingCategories')}</p>
                ) : errorLevels ? (
                  <p className="text-red-500 text-center mt-4">{t('errorLoadingCategories', { message: errorLevels.message })}</p>
                ) : (
                  <EducationLevelSelect LevelOptions={LevelOptions} setLevelName={setLevelName} />
                )}
                
                <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
                <PriceSlider priceRange={priceRangeState} setPriceRange={setPriceRangeState} onPriceChange={setPriceRange} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="md:hidden flex justify-center py-4">
        <button onClick={openForm} className="w-[95px] h-[48px] bg-[#2F2F2F] rounded-[40px] text-white flex items-center justify-center gap-2">
          <img src={filterIcon} alt={t('filterTitle')} className="w-5 h-5" /> 
          {t('filterTitle')}
        </button>
      </div>

      {isFormOpen && (
        <div ref={modalRef} className="fixed inset-x-0 bottom-0 z-50 bg-transparent flex justify-center items-end">
          <div
            className="bg-white p-4 rounded-t-3xl relative shadow-lg overflow-y-auto"
            style={{
              width: "100%",
              maxHeight: "90vh", 
              border: "1px solid #ccc",
            }}
          >
            <div className="w-[80px] h-[4px] bg-gray-500 mx-auto mt-2 cursor-grab"></div>

            <div
              className="absolute top-8 left-8 cursor-pointer border border-red-500 p-1 rounded-md flex text-red-500"
              onClick={closeForm}
            >
              <img src={cancel} alt={t('close')} className="w-4 h-4 mr-1" />
              {t('close')} 
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
                setPriceRange(values.price); 
                closeForm();
              }}
            >
              {({ setFieldValue }) => (
                <Form>
                  <SearchFilter
                    searchTerm={searchTerm}
                    setSearchTerm={(value) => debouncedSearch(value)}
                    setFieldValue={setFieldValue}
                  />
                  {isLoadingTeachers ? (
                    <p className="text-gray-500 text-center mt-4">{t('loadingTeachers')}</p>
                  ) : errorTeachers ? (
                    <p className="text-red-500 text-center mt-4">{t('errorLoadingTeachers', { message: errorTeachers.message })}</p>
                  ) : (
                    <InstructorSelect teachers={uniqueTeachers} setTeacherId={setTeacherId} />
                  )}

                  {isLoadingTechnologies ? (
                    <p className="text-gray-500 text-center mt-4">{t('loadingTechnologies')}</p>
                  ) : errorTechnologies ? (
                    <p className="text-red-500 text-center mt-4">{t('errorLoadingTechnologies', { message: errorTechnologies.message })}</p>
                  ) : (
                    <CategorySelect technologyOptions={technologyOptions} setTechnologies={setTechnologies} setTechCount={setTechCount} />
                  )}

                  {isLoadingLevels ? (
                    <p className="text-gray-500 text-center mt-4">{t('loadingCategories')}</p>
                  ) : errorLevels ? (
                    <p className="text-red-500 text-center mt-4">{t('errorLoadingCategories', { message: errorLevels.message })}</p>
                  ) : (
                    <EducationLevelSelect LevelOptions={LevelOptions} setLevelName={setLevelName} />
                  )}
                  
                  <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
                  <PriceSlider priceRange={priceRangeState} setPriceRange={setPriceRangeState} onPriceChange={setPriceRange} />

                  <button type="submit" className="mt-6 w-full bg-[#3772FF] text-white py-3 rounded-xl">
                    {t('applyFilters')}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;