import http from "../../interceptor"; //axios//

export const getTeacher = async () => {
    try {
        const result = await http.get(`/Home/GetTeachers`);
    
      return result;
    } catch (error) {   
        console.log(error);
        return error;
    }
};