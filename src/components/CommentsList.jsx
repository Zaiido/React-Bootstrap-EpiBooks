import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
    render() {
        return (
            <>
                {this.props.bookCommentsList.map((commentObject) => {
                    return (
                        <SingleComment commentObject={commentObject} key={commentObject._id} />
                    )
                })}
            </>
        )
    }
}

export default CommentsList