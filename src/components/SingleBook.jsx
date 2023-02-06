import { Component } from 'react';
import { Col, Card, Badge } from "react-bootstrap"

class SingleBook extends Component {

    state = {
        selected: false
    }

    render() {
        return (
            <>
                <Col xs={12} md={6} lg={6} className="my-3">
                    <Card onClick={(eventData) => {
                        if (this.state.selected === false) {
                            this.setState({ selected: true })
                            eventData.target.classList.add("selected")

                            this.props.sendBookId(this.props.book.asin)

                        } else {
                            this.setState({ selected: false })
                            eventData.target.classList.remove("selected")

                        }
                    }}>
                        <Card.Img variant="top" src={this.props.book.img} />
                        <Card.Body>
                            <Badge pill variant="primary">
                                {this.props.book.category}
                            </Badge>
                            <Card.Title className="truncate">{this.props.book.title}</Card.Title>
                            <Card.Text>
                                <span>Price:</span>  €{this.props.book.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* {this.state.selected && <CommentArea bookID={this.props.book.asin} />} */}
                </Col>
            </>
        )
    }
}

export default SingleBook