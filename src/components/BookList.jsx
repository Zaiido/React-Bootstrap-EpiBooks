import { useEffect, useState } from "react";
import { Container, Row, Form, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {

    const [query, setQuery] = useState("");
    const [bookId, setBookId] = useState(undefined)

    const getBookIdFromSingleBook = (id) => {
        setBookId(id)
    }


    useEffect(() => {
        props.sendBookId(bookId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookId])


    return (
        <Container>
            <div className="d-flex justify-content-end">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={query}
                        onChange={(eventData) => {
                            setQuery(eventData.target.value)
                        }} />
                </Form>
            </div>
            <Row className="my-4">
                {props.listOfBooks.filter((book) => {
                    return book.title.toLowerCase().includes(query.toLowerCase())
                }).slice(0, 14).map((book) => {
                    return <SingleBook sendBookId={getBookIdFromSingleBook} book={book} key={book.asin} selected={book.asin === bookId} />
                })}

            </Row>
        </Container>
    )
}

export default BookList