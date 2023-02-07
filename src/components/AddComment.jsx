import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const AddComment = (props) => {

    const [commentToAdd, setCommentToAdd] = useState({
        comment: "",
        rate: "",
        elementId: props.elementId
    })

    const [isError, setIsError] = useState(false)

    return (
        <Form onSubmit={async (eventData) => {
            try {
                eventData.preventDefault()
                let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                    method: "POST",
                    body: JSON.stringify(commentToAdd),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYWMxNTUwMWZlODAwMTU2MGMyMTIiLCJpYXQiOjE2NzUzNDA4MjIsImV4cCI6MTY3NjU1MDQyMn0.dNhuX-b-VsYhfD6A0twErLiNz3kOKX37djHyFrKqtP0"
                    }
                })
                if (response.ok) {
                    props.commentAdded()
                    setCommentToAdd({
                        comment: "",
                        rate: "",
                        elementId: props.elementId
                    })
                    setIsError(false)
                } else {
                    setIsError(true)
                }
            } catch (error) {
                setIsError(true)
            }
        }}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Comment:</Form.Label>
                <Form.Control type="text" placeholder="Enter comment" value={commentToAdd.comment}
                    onChange={(eventData) => {
                        setCommentToAdd({
                            ...commentToAdd,
                            comment: eventData.target.value

                        })
                    }} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Rating:</Form.Label>
                <Form.Control type="text" placeholder="1-5" value={commentToAdd.rate} onChange={(eventData) => {
                    setCommentToAdd({
                        ...commentToAdd,
                        rate: eventData.target.value

                    })
                }} />
            </Form.Group>
            {isError && <Alert variant="danger"> Aww snap! There is an error...😐</Alert>}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}


export default AddComment