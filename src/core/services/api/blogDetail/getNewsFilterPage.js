import http from "../../interceptor"; //axios//

export const getNewsFilterPage = async () => {

    try {
        const result = await http.get(`/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&`);
        return result;
      
    } catch (error) {   
        console.log(error);
        return error;
    }
    
};