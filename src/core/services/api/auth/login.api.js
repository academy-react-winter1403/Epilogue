import http from "../../interceptor";
export const loginStep1 = async (credintials) => {
  try {
    console.log("Fetching started...");
    const result = await http.post(`/Sign/Login`,credintials);

    localStorage.setItem('token',result.token)

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const loginStep2 = async ({VerifyCode,Body}) => {
  try {
    const params ={VerifyCode}
    console.log("Fetching started...");
    const result = await http.post("/Sign/LoginTwoStep",Body,{params});
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
