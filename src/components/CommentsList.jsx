import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
    state = {
        deletedComment: false
    }

    commentDidDelete = () => {
        this.setState({ deletedComment: true })
    }

    componentDidUpdate(prevProps, prevStat) {
        if (prevStat.deletedComment !== this.state.deletedComment) {
            this.props.commentDeleted()
            this.setState({ deletedComment: false })

        }

    }

    render() {
        return (
            <>
                {this.props.bookCommentsList.map((commentObject) => {
                    return (
                        <SingleComment commentObject={commentObject} key={commentObject._id} commentDeleted={this.commentDidDelete} />
                    )
                })}
            </>
        )
    }
}

export default CommentsList