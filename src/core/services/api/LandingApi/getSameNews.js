import http from "../../interceptor"; //axios//

export const getSameNews = async () => {
    try {
        const result = await http.get(`/News?PageNumber=1&RowsOfPage=3&SortingCol=InsertDate&SortType=DESC`);
    
      return result;
    } catch (error) {   
        console.log(error);
        return error;
    }
};