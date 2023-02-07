import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import { ListGroup, Spinner, Alert } from "react-bootstrap";
import AddComment from "./AddComment";

const CommentArea = (props) => {
    const [bookComments, setBookComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [addedOrDeletedComment, setAddedOrDeletedComment] = useState(false)

    const commentDidAddOrDelete = () => {
        setAddedOrDeletedComment(true)
    }

    useEffect(() => {
        getComments();
        setAddedOrDeletedComment(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.bookId, addedOrDeletedComment])


    const getComments = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.bookId, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYWMxNTUwMWZlODAwMTU2MGMyMTIiLCJpYXQiOjE2NzUzNDA4MjIsImV4cCI6MTY3NjU1MDQyMn0.dNhuX-b-VsYhfD6A0twErLiNz3kOKX37djHyFrKqtP0"
                }
            })
            if (response.ok) {
                let comments = await response.json();
                setBookComments(comments);
                setIsLoading(false)
            } else {
                setIsError(true)
                setIsLoading(false)
            }
        } catch (error) {
            setIsError(true)
            setIsLoading(false)
        }
    }

    return (
        <div className="comment-area">
            {isLoading && <Spinner className="spinner" animation="border" variant="primary" />}
            {isError && <Alert variant="danger"> Aww snap! There is an error...😐 Please try again later.</Alert>}
            <ListGroup>
                <CommentsList bookCommentsList={bookComments} commentDeleted={commentDidAddOrDelete} />
            </ListGroup>
            <AddComment elementId={props.bookId} commentAdded={commentDidAddOrDelete} />
        </div>


    )
}
export default CommentArea