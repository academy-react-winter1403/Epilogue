import http from "../../../interceptor";
export const RegisterStep2 = async (row) => {
  try {
    console.log("Fetching started...");
    const result = await http.post(`/Sign/VerifyMessage`,row);

    localStorage.setItem('token',result.token)

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
