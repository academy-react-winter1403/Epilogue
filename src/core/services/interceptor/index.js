import axios from "axios";

import { getItem } from "../common/storage.services";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  console.log(err);

 
  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  const token =  localStorage.getItem('token')
  opt.headers.Authorization = "bearer " + token
  return opt;
});

export default instance;
