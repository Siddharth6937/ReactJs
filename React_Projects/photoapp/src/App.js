import './App.css';
import Photo from './components/Photo';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';

const App = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <Photo />
    </div>
  );
}

export default App;
