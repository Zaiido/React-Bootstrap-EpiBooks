import { useEffect, useState } from "react";
import SingleComment from "./SingleComment";

const CommentsList = (props) => {

    const [deletedComment, setDeletedComment] = useState(false)

    const commentDidDelete = () => {
        setDeletedComment(true)
    }

    useEffect(() => {
        props.commentDeleted();
        setDeletedComment(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deletedComment])


    return (
        <>
            {props.bookCommentsList.map((commentObject) => {
                return (
                    <SingleComment commentObject={commentObject} key={commentObject._id} commentDeleted={commentDidDelete} />
                )
            })}
        </>
    )
}


export default CommentsList