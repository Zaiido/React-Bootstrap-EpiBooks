import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav.jsx'
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
