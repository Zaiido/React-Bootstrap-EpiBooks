import { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";

class AddComment extends Component {

    state = {
        commentToAdd: {
            comment: "",
            rate: "",
            elementId: this.props.elementId
        }
    }

    render() {
        return (
            <Form onSubmit={async (eventData) => {
                try {
                    eventData.preventDefault()
                    let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                        method: "POST",
                        body: JSON.stringify(this.state.commentToAdd),
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYWMxNTUwMWZlODAwMTU2MGMyMTIiLCJpYXQiOjE2NzUzNDA4MjIsImV4cCI6MTY3NjU1MDQyMn0.dNhuX-b-VsYhfD6A0twErLiNz3kOKX37djHyFrKqtP0"
                        }
                    })
                    if (response.ok) {
                        this.setState({
                            ...this.state,
                            isError: false
                        })
                    } else {
                        this.setState({
                            isError: true,
                        })
                    }
                } catch (error) {
                    this.setState({
                        isError: true
                    })
                }
            }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control type="text" placeholder="Enter comment" value={this.state.commentToAdd.comment}
                        onChange={(eventData) => {
                            this.setState({
                                commentToAdd: {
                                    ...this.state.commentToAdd,
                                    comment: eventData.target.value

                                }
                            })
                        }} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Rating:</Form.Label>
                    <Form.Control type="text" placeholder="1-5" value={this.state.commentToAdd.rate} onChange={(eventData) => {
                        this.setState({
                            commentToAdd: {
                                ...this.state.commentToAdd,
                                rate: eventData.target.value

                            }
                        })
                    }} />
                </Form.Group>
                {this.state.isError === false && <Alert variant="success"> Comment added. Please reload the page. 😁</Alert>}
                {this.state.isError && <Alert variant="danger"> Aww snap! There is an error...😐 Please try again later.</Alert>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default AddComment