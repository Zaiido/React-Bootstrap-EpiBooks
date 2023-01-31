import { Component } from "react";
import { Container, Button, Row, Col, Card, Badge } from "react-bootstrap";
import history from '../books/history.json'
import fantasy from '../books/fantasy.json'
import horror from '../books/horror.json'
import romance from '../books/romance.json'
import scifi from '../books/scifi.json'

class AllTheBooks extends Component {
    state = {
        books: history
    }

    BookGenre(genre) {
        this.setState({ books: genre })
    }
    render() {
        return (
            <Container>
                <Button onClick={() => this.BookGenre(history)} variant="secondary">History</Button>{' '}
                <Button onClick={() => this.BookGenre(fantasy)} variant="secondary">Fantasy</Button>{' '}
                <Button onClick={() => this.BookGenre(horror)} variant="secondary">Horror</Button>{' '}
                <Button onClick={() => this.BookGenre(romance)} variant="secondary">Romance</Button>{' '}
                <Button onClick={() => this.BookGenre(scifi)} variant="secondary">Scifi</Button>
                <Row className="my-4">
                    {this.state.books.map((book) => {
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