import React from 'react'
import { CommentSection } from '../../common/comment/CommentSection.jsx'
import { useGetCommentCourse, usePostCommentCourse, usePostCommentReply, useGetCommentReplies } from '../../../core/hooks/courseHooks/useCommentCourse'

const CommentCourse = ({CourseId, course}) => {

        const getComment = useGetCommentCourse(CourseId)
        const postComment = usePostCommentCourse()
        const postReply = usePostCommentReply()
        const getReplies = useGetCommentReplies
        console.log('Comments data:', getComment?.data);
  return (
    <div>
      <CommentSection
        id={CourseId}
        contentId={course} 
        getComment={getComment} 
        postComment={postComment} 
        getReplies={getReplies} 
        postReply={postReply} 
        />
    </div>
  )
}

export { CommentCourse }
