import http from "../../../interceptor"; //axios//

export const getCommentsReply = async (newsId) => {
    try {
        const result = await http.get(`/News/GetRepliesComments?Id=${newsId}`);
        return result;

    } catch (error) {   
        console.log(error , 'getBlogComments-Reply');
        return error;
        
    }
};

export const postCommentsReply = async (newsId) => {
    try {
        const result = await http.post(`/News/CreateNewsReplyComment`,{newsId});
        console.log('blog-post')
        return result;

    } catch (error) {   
        console.log(error , 'postBlogComments-Reply');
        return error;
        
    }
};
