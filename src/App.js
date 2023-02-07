import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav.jsx'
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
// import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';
import history from './books/history.json'
import { Col, Container, Row } from 'react-bootstrap';
import CommentArea from './components/CommentArea';
import React, { useState } from 'react'

const App = () => {

  const [bookId, setBookId] = useState(null)

  const getBookIdFromBookList = (id) => {
    setBookId(id)
  }


  return (
    <>
      <MyNav />
      <Welcome />
      {/* <AllTheBooks /> */}
      <Container>
        <Row>
          <Col className='col-12 col-sm-6 col-md-6 col-lg-6 order-2 order-sm-1'>
            <BookList listOfBooks={history} sendBookId={getBookIdFromBookList} />
          </Col>
          <Col className='col-12 col-sm-6 col-md-6 col-lg-6 order-1 order-sm-2 comment-area-container'>
            {bookId ? <CommentArea bookId={bookId} /> : <h4>Comments Area</h4>}
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  )
}

export default App;
