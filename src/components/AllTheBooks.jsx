import { Component } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import books from '../books/history.json'

class AllTheBooks extends Component {
    render() {
        return (
            <Container>
                <Row className="my-4">
                    {books.map((book) => {
                        return <Col xs={6} md={4} lg={3} className="my-3" key={book.asin}>
                            <Card>
                                <Card.Img variant="top" src={book.img} />
                                <Card.Body>
                                    <Badge pill variant="primary">
                                        {book.category}
                                    </Badge>
                                    <Card.Title className="truncate">{book.title}</Card.Title>
                                    <Card.Text>
                                        <span>Price:</span>  €{book.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card></Col>
                    })}

                </Row>
            </Container>
        )
    }
}

export default AllTheBooks