import http from "../../interceptor/index";

export const getStudentHomeworkList = async () => {
    try {
        const response = await http.get("/Session/StudentHomeworkList")
        return response;
    } catch (error) {
        return error;
    }
}