import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav.jsx'
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
// import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';
import history from './books/history.json'


function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      {/* <AllTheBooks /> */}
      <BookList listOfBooks={history} />
      <MyFooter />
    </div>
  );
}

export default App;
