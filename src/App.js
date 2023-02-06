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


import React, { Component } from 'react'

class App extends Component {

  state = {
    bookId: null
  }

  getBookIdFromBookList = (id) => {
    this.setState({ bookId: id })
  }


  render() {
    return (
      <>
        <MyNav />
        <Welcome />
        {/* <AllTheBooks /> */}
        <Container>
          <Row>
            <Col className='col-12 col-sm-6 col-md-6 col-lg-6'>
              <BookList listOfBooks={history} sendBookId={this.getBookIdFromBookList} />
            </Col>
            <Col className='col-12 col-sm-6 col-md-6 col-lg-6 comment-area-container'>
              <CommentArea bookId={this.state.bookId} />
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    )
  }
}

export default App;
