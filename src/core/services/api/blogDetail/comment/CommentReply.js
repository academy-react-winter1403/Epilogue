import http from "../../../interceptor"; //axios//

export const getCommentsReply = async (id) => {
    try {
        const result = await http.get(`/News/GetRepliesComments?Id=${id}`);
        return result;
    } catch (error) {   
        console.log(error , 'getBlogComments-Reply');
        return error;
    }
};

export const postCommentsReply = async (id, userIpAddress, title, describe, userId, parentId) => {
    try {
        const result = await http.post(`/News/CreateNewsReplyComment`,{
            newsId: id,
            userIpAddress: userIpAddress,
            title: title,
            describe: describe,
            userId: userId,
            parentId: parentId,
        });
        console.log('blog-post')
        return result;

    } catch (error) {   
        console.log(error , 'postBlogComments-Reply');
        return error;
        
    }
};
