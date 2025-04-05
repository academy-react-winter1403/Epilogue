import http from "../../interceptor"; //axios//
export const getMyCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=")
        console.log(response)
        return response
    } catch (error) {
        throw error
    }
}