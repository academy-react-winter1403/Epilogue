import { Formik, Form } from "formik";
import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import gsap from "gsap";
import axios from "axios";
import useStore from "../../../core/Store/Zustand-Store";
import { SearchFilter } from "./Search";
import { CategorySelect } from "./CategorySelect";
import { DateRangePicker } from "./DateRangePicker";
import cancel from '../../../assets/cancel.png';
import { useTranslation } from 'react-i18next';


function Filter({ searchTerm, setSearchTerm, setPriceRange }) {
  const { t } = useTranslation('blogList');
  const [priceRangeState, setPriceRangeState] = useState([0, 100000000]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [isFormOpen, setFormOpen] = useState(false);
  const modalRef = useRef(null);
  const startPosition = useRef(0);
  const isDragging = useRef(false);

  const { setTeacherId, setTechnologies, setTechCount, setLevelName } =
    useStore((state) => state);

  const {
    data: categorys,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categorys"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://classapi.sepehracademy.ir/api/News/GetListNewsCategory"
        );
        return response.data;
      } catch (error) {
        console.error(t('errorLoadingCategories'), error); 
        throw error;
      }
    },
  });

  const categorysOption = categorys?.map((teacher) => ({
    value: teacher?.id,
    label: teacher?.categoryName,
  }));

  useEffect(() => {
    if (isFormOpen) {
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [isFormOpen]);

  const openForm = () => {
    setFormOpen(true);
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

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startPosition.current = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const delta = startPosition.current - e.clientY;
    startPosition.current = e.clientY;

    const newHeight = Math.max(300, modalRef.current.offsetHeight - delta);
    modalRef.current.style.height = `${newHeight}px`;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;

    isDragging.current = false;
  };

  return (
    <div>
      <div className="hidden md:block">
        <div
          className={`w-[278px] h-[370px] border border-[#DCDCDC] rounded-3xl`}
        >
          <h1 className="font-bold text-2xl mt-4 mr-5">{t('filter')}</h1> 
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
            }}
          >
            {({ setFieldValue, values }) => (
              <Form className="mt-4">
                <SearchFilter
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  setFieldValue={setFieldValue}
                />
                <CategorySelect
                  setTechnologies={setTechnologies}
                  setTechCount={setTechCount}
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
        {isFormOpen && (
          <div
            ref={modalRef}
            className="fixed bottom-0 left-0 w-full bg-transparent z-50 flex justify-center items-end"
          >
            <div
              className="bg-white p-4 rounded-t-xl relative shadow-lg"
              style={{
                width: "100%",
                border: "1px solid #ccc",
                maxHeight: "90%",
              }}
            >
              <div
                className="w-[80px] h-[4px] bg-gray-500 mx-auto mt-2 cursor-grab"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              ></div>
              <div className="flex">
                <h1 className="font-bold text-2xl mb-5 mr-5">{t('filter')}</h1> 
                <div
                  className="absolute top-8 left-8 cursor-pointer border border-red-500 text-red-500 p-1 rounded-md flex"
                  onClick={closeForm}
                >
                  <img src={cancel} alt={t('close')} /> 
                  {t('close')} 
                </div>
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
                }}
              >
                {({ setFieldValue, values }) => (
                  <Form>
                    <SearchFilter
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                      setFieldValue={setFieldValue}
                    />
                    <CategorySelect
                      technologyOptions={categorysOption}
                      setTechnologies={setTechnologies}
                      setTechCount={setTechCount}
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
        )}
      </div>
    </div>
  );
}

export default Filter;