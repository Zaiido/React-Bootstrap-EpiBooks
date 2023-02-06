import { Component } from "react";
import { Button, ListGroup, Alert } from "react-bootstrap";

class SingleComment extends Component {
    state = {
        isError: null
    }
    render() {
        return (
            <ListGroup.Item>
                <div className="d-flex align-items-center">
                    <div>
                        <p><span>Comment:</span> {this.props.commentObject.comment}</p>
                        <p><span>Rating:</span> {this.props.commentObject.rate}</p>
                        <p><span>Author:</span> {this.props.commentObject.author}</p>
                    </div>
                    <div className="ml-auto">
                        <Button variant="danger"
                            onClick={async () => {
                                try {
                                    let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.commentObject._id, {
                                        method: "DELETE",
                                        headers: {
                                            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYWMxNTUwMWZlODAwMTU2MGMyMTIiLCJpYXQiOjE2NzUzNDA4MjIsImV4cCI6MTY3NjU1MDQyMn0.dNhuX-b-VsYhfD6A0twErLiNz3kOKX37djHyFrKqtP0"
                                        }
                                    })
                                    if (response.ok) {
                                        this.setState({ isError: false })
                                        this.props.commentDeleted()
                                    } else {
                                        this.setState({ isError: true })
                                    }
                                } catch (error) {
                                    this.setState({ isError: true })
                                }
                            }}>Delete</Button>
                    </div>
                </div>
                {this.state.isError && <Alert variant="danger"> Aww snap! There is an error...😐 Please try again later.</Alert>}
            </ListGroup.Item>
        )
    }
}

export default SingleComment