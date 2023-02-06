import { Component } from "react";
import { Container, Row, Form, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {

    state = {
        query: "",
        bookId: undefined
    }

    getBookIdFromSingleBook = (id) => {
        this.setState({ bookId: id })
    }

    componentDidUpdate(prevProps, prevStat) {
        // console.log(prevStat.bookId)
        // console.log(this.state.bookId)
        if (prevStat.bookId !== this.state.bookId) {
            this.props.sendBookId(this.state.bookId)
        }
    }

    render() {
        return (
            <Container>
                <div className="d-flex justify-content-end">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.query}
                            onChange={(eventData) => {
                                this.setState({
                                    query: eventData.target.value
                                })
                            }} />
                    </Form>
                </div>
                <Row className="my-4">
                    {this.props.listOfBooks.filter((book) => {
                        return book.title.toLowerCase().includes(this.state.query.toLowerCase())
                    }).map((book) => {
                        return <SingleBook sendBookId={this.getBookIdFromSingleBook} book={book} key={book.asin} />
                    })}

                </Row>
            </Container>
        )
    }
}
export default BookList