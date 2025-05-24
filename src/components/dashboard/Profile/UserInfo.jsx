import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Calendar02Icon } from "../../../components/common/Icons/Calender-02Icon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editProfile } from "../../../core/services/api/Dashboard/dashborad";
import useUserStore from "../../../core/constant/user-info";
import { useTranslation } from 'react-i18next'; 

const UserInfo = () => {
  const { t } = useTranslation('dashboard'); 
  const queryClient = useQueryClient();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t('firstNameRequired')),
    lastName: Yup.string().required(t('lastNameRequired')),
    userAbout: Yup.string(),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, t('phoneNumberNumeric'))
      .min(10, t('phoneNumberMin'))
      .required(t('phoneNumberRequired')),
    nationalCode: Yup.string()
      .matches(/^[0-9]+$/, t('nationalCodeNumeric'))
      .min(10, t('nationalCodeLength'))
      .max(10, t('nationalCodeLength'))
      .required(t('nationalCodeRequired')),
    birthday: Yup.date().required(t('birthdayRequired')),
    gender: Yup.string().oneOf(
      ["male", "female"],
      t('genderSelectionRequired')
    ),
    email: Yup.string()
      .email(t('invalidEmailFormat'))
      .required(t('emailRequired')),
    homeAddress: Yup.string(),
  });

  const userProfile = useUserStore((state) => state.userProfile);
  const editUserProfile = async (values) => {
    const userProfileInfo = new FormData();
    const birthdayFormatted = values.birthday instanceof Date
      ? values.birthday.toISOString()
      : new Date(values.birthday).toISOString(); 
    
    userProfileInfo.append("FName", values.firstName);
    userProfileInfo.append("LName", values.lastName);
    userProfileInfo.append("UserAbout", values.userAbout);
    userProfileInfo.append("PhoneNumber", values.phoneNumber);
    userProfileInfo.append("NationalCode", values.nationalCode);
    userProfileInfo.append("BirthDay", birthdayFormatted); 
    userProfileInfo.append("gender", values.gender === "male"); 
    userProfileInfo.append("Email", values.email);
    userProfileInfo.append("HomeAdderess", values.homeAddress);
    mutation.mutate(userProfileInfo);
  };

  const mutation = useMutation({
    mutationFn: editProfile,
    onSuccess: () => {
      toast.success(t('profileEditSuccess')); 
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    },
    onError: () => {
      toast.error(t('profileEditError')); 
    },
  });

  return (
    <div>
      {userProfile ? ( 
        <Formik
          enableReinitialize 
          initialValues={{
            firstName: userProfile?.fName || "",
            lastName: userProfile?.lName || "",
            userAbout: userProfile?.userAbout || "",
            phoneNumber: userProfile?.phoneNumber || "",
            nationalCode: userProfile?.nationalCode || "",
            birthday: userProfile?.birthDay ? new Date(userProfile.birthDay).toISOString().split('T')[0] : "",
            gender: userProfile?.gender || "",
            email: userProfile?.email || "",
            homeAddress: userProfile?.homeAdderess || "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => editUserProfile(values)}
        >
          {(form) => (
            <Form>
              <div className="mb-6">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <p className="block font-yekan-600 text-black text-sm mb-2">
                      {t('firstName')} 
                    </p>
                    <Field
                      type="text"
                      name="firstName"
                      className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px] "
                      placeholder={t('enterFirstName')} 
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="block font-yekan-600 text-black text-sm mb-2">
                      {t('lastName')}
                    </p>
                    <Field
                      type="text"
                      name="lastName"
                      className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px] "
                      placeholder={t('enterLastName')} 
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="block font-yekan-600 text-black text-sm mb-2">
                  {t('aboutMe')}
                </p>
                <Field
                  as="textarea"
                  name="userAbout"
                  className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full h-[123px] py-3 px-3 text-black text-[12px] "
                  placeholder={t('enterAboutMe')} 
                />
                <ErrorMessage
                  name="userAbout"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-6">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <p className="block font-yekan-600 text-black text-sm mb-2">
                      {t('phoneNumber')}
                    </p>
                    <Field
                      type="tel"
                      name="phoneNumber"
                      className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px] "
                      placeholder={t('enterPhoneNumber')} 
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="block font-yekan-600 text-black text-sm mb-2">
                      {t('nationalCode')}
                    </p>
                    <Field
                      type="text"
                      name="nationalCode"
                      className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px]"
                      placeholder={t('enterNationalCode')} 
                    />
                    <ErrorMessage
                      name="nationalCode"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 flex flex-row gap-4">
                <div className="w-1/2">
                  <p className="block font-yekan-600 text-black text-sm mb-2">
                    {t('birthday')}
                  </p>
                  <div className="relative">
                    <Field
                      type="date"
                      name="birthday"
                      className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px] "
                      placeholder={t('enterBirthday')} 
                    />
                    <div className="absolute top-1/2 left-3 -translate-y-1/2"> 
                      <Calendar02Icon />
                    </div>
                  </div>
                  <ErrorMessage
                    name="birthday"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <div className="w-1/2">
                  <p className="block font-yekan-600 text-black text-sm mb-2">
                    {t('gender')} 
                  </p>
                  <div className="flex items-center space-x-4">
                    <p className="text-gray-700 text-sm">{t('male')}</p> 
                    <Field type="radio" name="gender" value="male" />
                    <p className="text-gray-700 text-sm">{t('female')}</p> 
                    <Field type="radio" name="gender" value="female" />
                    <div>
                      <button
                        type="button"
                        className="text-[#3772FF] py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                      >
                        {t('select')}
                      </button>
                    </div>{" "}
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>
              </div>

              <div className="mb-6">
                <p className="block font-yekan-600 text-black text-sm mb-2">
                  {t('email')} 
                </p>
                <Field
                  type="email"
                  name="email"
                  className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px] "
                  placeholder={t('emailRequired')} 
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-6">
                <p className="block font-yekan-600 text-black text-sm mb-2">
                  {t('homeAddress')} 
                </p>
                <Field
                  type="text"
                  name="homeAddress"
                  className="border themed-dash-input border-[#DCDCDC] rounded-3xl w-full py-3 px-3 text-black text-[12px] "
                  placeholder={t('enterHomeAddress')}
                />
                <ErrorMessage
                  name="homeAddress"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <button
                type="submit"
                className="bg-[#3772FF] hover:bg-blue-700 text-white text-[12px] py-2 px-4 rounded-[40px] w-[125px] h-[48px] "
              >
                {t('applyChanges')} 
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <p className="flex justify-center items-center h-full py-10">
          {t('loadingProfile')} 
        </p>
      )}
    </div>
  );
};

export default UserInfo;