import { Component } from "react";
import CommentsList from "./CommentsList";
import { ListGroup, Spinner, Alert } from "react-bootstrap";
import AddComment from "./AddComment";

class CommentArea extends Component {
    state = {
        bookComments: [],
        isLoading: true,
        isError: false
    }

    componentDidMount() {
        this.getComments()
    }

    getComments = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookID, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYWMxNTUwMWZlODAwMTU2MGMyMTIiLCJpYXQiOjE2NzUzNDA4MjIsImV4cCI6MTY3NjU1MDQyMn0.dNhuX-b-VsYhfD6A0twErLiNz3kOKX37djHyFrKqtP0"
                }
            })
            if (response.ok) {
                let data = await response.json();
                this.setState({ bookComments: data, isLoading: false })
            } else {
                this.setState({ isError: true, isLoading: false })

            }
        } catch (error) {
            this.setState({ isError: true, isLoading: false })
        }
    }

    render() {
        return (
            <div className="comment-area">
                {this.state.isLoading && <Spinner className="spinner" animation="border" variant="primary" />}
                {this.state.isError && <Alert variant="danger"> Aww snap! There is an error...😐 Please try again later.</Alert>}

                <ListGroup>
                    <CommentsList bookCommentsList={this.state.bookComments} />
                </ListGroup>
                <AddComment elementId={this.props.bookID} />
            </div>


        )
    }
}

export default CommentArea