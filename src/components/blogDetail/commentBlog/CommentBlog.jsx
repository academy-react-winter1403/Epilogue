import { CommentSection } from '../../common/comment/CommentSection.jsx'
import { useGetCommentBlog, usePostCommentBlog,usePostCommentReply,useGetCommentReplies } from '../../../core/hooks/blogHooks/useCommentBlog.js'
const CommentBlog = ({newsId, blog}) => {
    const getComment = useGetCommentBlog(newsId) 
    const postComment = usePostCommentBlog()
    const postReply = usePostCommentReply()
    const getReplies = useGetCommentReplies
    console.log('Comments blog data:', getComment?.data);
    
  return (
    <CommentSection
      id={newsId}
      isBlog={newsId}
      contentId={blog} 
      getComment={getComment} 
      postComment={postComment} 
      postReply={postReply} 
      getReplies={getReplies}
    />
  )
}

export { CommentBlog }
