import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import Photo from './components/Photo/Photo';
import About from './components/About';
import Contact from './components/Contact';
import EnlargedPhoto from './components/EnlargedPhoto';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Photo />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/photos/:id' element={<EnlargedPhoto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;




// <Link to="/">Home</Link>
// <Link to="/about">About</Link>
// <Link to="/contact">Contact</Link>