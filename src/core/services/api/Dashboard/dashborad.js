import http from "../../interceptor"; //axios//

export const getUserInfo = async () => {
    try {
        const response = await http.get("/SharePanel/GetProfileInfo")
        return response
    } catch (error) {
        throw error
    }
}

export const getMyCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=")
        return response
    } catch (error) {
        throw error
    }
}

export const getReservedCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyCoursesReserve")
        return response
    } catch (error) {
        throw error
    }
}

export const getFavoriteCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyFavoriteCourses")
        return response
    } catch (error) {
        throw error
    }
}

export const getFavoriteArticles = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyFavoriteNews")
        return response
    } catch (error) {
        throw error
    }
}