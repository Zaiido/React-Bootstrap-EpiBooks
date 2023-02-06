import { Component } from 'react';
import { Col, Card, Badge } from "react-bootstrap"

class SingleBook extends Component {

    state = {
        selectedBook: null
    }

    render() {
        return (
            <>
                <Col xs={12} md={6} lg={6} className="my-3">
                    <Card className={this.props.selected ? "selected" : " "} onClick={() => {
                        this.props.sendBookId(this.props.book.asin)
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
                </Col>
            </>
        )
    }
}

export default SingleBook