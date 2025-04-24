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

<<<<<<< HEAD
 
=======
  if (err?.response.status === 401) 
    logout()
  

>>>>>>> a84d81b8f5eff428f8bb6dab8c8b69153ccfe8fc
  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
<<<<<<< HEAD
  const token =  localStorage.getItem('token')
  opt.headers.Authorization = "bearer " + token
=======
  const token = getItem("token")
  if (token) opt.headers.Authorization = "Bearer " + token;
>>>>>>> a84d81b8f5eff428f8bb6dab8c8b69153ccfe8fc
  return opt;
});

export default instance;
