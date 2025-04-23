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
 function Filter({
  searchTerm,
  setSearchTerm,
  setPriceRange,
}) {
  const [priceRange, setPriceRangeState] = useState([0, 100000000]);
  const [dateRange, setDateRange] = useState([null, null]);

  const educationLevels = [
    { value: "نامبتدی", label: "نا مبتدی" },
    { value: "متوسط", label: "متوسط" },
    { value: "پیشرفته", label: "پیشرفته" },
  ];

  const { setTeacherId, setTechnologies, setTechCount } = useStore((state) => state);

  const { data: teachers, isLoading, error } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      try {
        const response = await axios.get("https://classapi.sepehracademy.ir/api/Home/GetTeachers");
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
        const response = await axios.get("https://classapi.sepehracademy.ir/api/Home/GetTechnologies");
        return response.data;
      } catch (error) {
        console.error("خطا در بارگذاری تکنولوژی‌ها:", error);
        throw error;
      }
    },
  });

  const technologyOptions = technologieses?.map((e) => ({
    value: e?.Id,
    label: e?.techName,
  }));

  const uniqueTeachers = teachers?.map((teacher) => ({
    value: teacher?.teacherId,
    label: teacher?.fullName,
  }));

  return (
    <div className="w-[258px] h-[625px]">
    <Formik
      initialValues={{
        search: '',
        instructor: null,
        educationLevel: null,
        category: null,
        price: priceRange,
        dateRange: dateRange,
      }}
      onSubmit={(values) => {
        console.log(values);
        console.log(`Selected Price Range: ${values.price[0]} - ${values.price[1]}`);
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
            educationLevels={educationLevels} 
            setFieldValue={setFieldValue} 
            values={values} 
            setSelectedLevel={(level) => {
            }} 
          />
          <DateRangePicker 
            dateRange={dateRange} 
            setDateRange={setDateRange} 
          />
          <PriceSlider 
            priceRange={priceRange} 
            setPriceRange={setPriceRangeState} 
          />
        </Form>
      )}
    </Formik>
    </div>
  );
}
export default Filter