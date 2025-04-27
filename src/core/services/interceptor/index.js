import axios from "axios";

import { getItem } from "../common/storage.services";

import { logout } from "../../utils/logout.services";


const baseURL = "https://classapi.sepehracademy.ir/api"

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  console.log(err);


  if (err?.response.status === 401) 
    logout()
  

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {

  const token = getItem("token")
  if (token) opt.headers.Authorization = "Bearer " + token;
  return opt;
});

export default instance;
