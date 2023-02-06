import { Component } from "react";
import CommentsList from "./CommentsList";
import { ListGroup, Spinner, Alert } from "react-bootstrap";
import AddComment from "./AddComment";

class CommentArea extends Component {
    state = {
        bookComments: [],
        isLoading: true,
        isError: false,
        addedComment: false,
        deletedComment: false

    }

    commentDidAdd = () => {
        this.setState({
            addedComment: true
        })
    }

    commentDidDelete = () => {
        this.setState({
            deletedComment: true
        })
    }

    componentDidMount() {
        this.getComments()
    }


    componentDidUpdate(prevProps, prevStat) {
        if (prevProps.bookId !== this.props.bookId || prevStat.addedComment !== this.state.addedComment || prevStat.deletedComment !== this.state.deletedComment) {
            this.getComments();
            this.setState({
                addedComment: false,
                deletedComment: false
            })
        }
    }

    getComments = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookId, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYWMxNTUwMWZlODAwMTU2MGMyMTIiLCJpYXQiOjE2NzUzNDA4MjIsImV4cCI6MTY3NjU1MDQyMn0.dNhuX-b-VsYhfD6A0twErLiNz3kOKX37djHyFrKqtP0"
                }
            })
            if (response.ok) {
                let comments = await response.json();
                this.setState({ bookComments: comments, isLoading: false })
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
                    <CommentsList bookCommentsList={this.state.bookComments} commentDeleted={this.commentDidDelete} />
                </ListGroup>
                <AddComment elementId={this.props.bookId} commentAdded={this.commentDidAdd} />
            </div>


        )
    }
}

export default CommentArea