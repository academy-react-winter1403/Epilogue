import axios from "axios";

import { logout } from "../../utils/logout.services";
import { clearStorage, getItem, removeItem } from "../common/storage.services";

const baseURL = "https://classapi.sepehracademy.ir/api"

const instance = axios.create({
    baseURL: baseURL,
});


const onSuccess = (response) => {
    return response.data;
};


const onError = (err) => {
    console.log(err);

    if (err.response.status === 401){
        logout()
    }


    return Promise.reject(err);
};


instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((option) => {
    const token = getItem("token");
    
    if(token) option.headers.Authorization = "Bearer " + token;
    return option;
});

export default instance;