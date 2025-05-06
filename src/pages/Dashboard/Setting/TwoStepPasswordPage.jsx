import { Field, Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";

const TwoStepPasswordPage = () => {
  return (
    <div>
      <Formik>
        <Form className="flex flex-col gap-10 p-4 md:p-6 lg:p-8">
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-yekan-600 setuserprofile">
              کد تایید
            </p>
            <Field
              type="text"
              name="oldPassword"
              placeholder="کد تایید را وارد کنید"
              className="border border-[#DCDCDC] text-[var(--text-grey)] rounded-3xl h-[48px] w-6/6 px-4 py-2 text-[12px]"
            />
          </div>

          <button
            type="submit"
            className="w-[80px] h-[30px] rounded-[20px] text-white bg-[#3772FF]"
          >
            ثبت
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default TwoStepPasswordPage;
