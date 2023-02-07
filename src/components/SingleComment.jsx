import { useState } from "react";
import { Button, ListGroup, Alert } from "react-bootstrap";

const SingleComment = (props) => {

    const [isError, setIsError] = useState(null)

    return (
        <ListGroup.Item>
            <div className="d-flex align-items-center">
                <div>
                    <p><span>Comment:</span> {props.commentObject.comment}</p>
                    <p><span>Rating:</span> {props.commentObject.rate}</p>
                    <p><span>Author:</span> {props.commentObject.author}</p>
                </div>
                <div className="ml-auto">
                    <Button variant="danger"
                        onClick={async () => {
                            try {
                                let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.commentObject._id, {
                                    method: "DELETE",
                                    headers: {
                                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYWMxNTUwMWZlODAwMTU2MGMyMTIiLCJpYXQiOjE2NzUzNDA4MjIsImV4cCI6MTY3NjU1MDQyMn0.dNhuX-b-VsYhfD6A0twErLiNz3kOKX37djHyFrKqtP0"
                                    }
                                })
                                if (response.ok) {
                                    setIsError(false)
                                    props.commentDeleted()
                                } else {
                                    setIsError(true)
                                }
                            } catch (error) {
                                setIsError(true)
                            }
                        }}>Delete</Button>
                </div>
            </div>
            {isError && <Alert variant="danger"> Aww snap! There is an error...😐</Alert>}
        </ListGroup.Item>
    )
}


export default SingleComment