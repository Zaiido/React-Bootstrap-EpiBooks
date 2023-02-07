import { Col, Card, Badge } from "react-bootstrap"

const SingleBook = (props) => {

    return (
        <>
            <Col xs={12} md={6} lg={6} className="my-3 d-flex justify-content-center">
                <Card className={props.selected ? "selected" : " "} onClick={() => {
                    props.sendBookId(props.book.asin)
                }}>
                    <Card.Img variant="top" src={props.book.img} />
                    <Card.Body>
                        <Badge pill variant="primary">
                            {props.book.category}
                        </Badge>
                        <Card.Title className="truncate">{props.book.title}</Card.Title>
                        <Card.Text>
                            <span>Price:</span>  €{props.book.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}


export default SingleBook