import './App.css';
import NavbarComponent from './components/NavbarComponent.jsx';
import NewsList from './components/NewsList/NewsList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleNews from './components/SingleNews.jsx';
import NotFound from './components/NotFound.jsx';
import Count from './components/Count.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';

function App() {

  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path='/' element={<NewsList />} />
            <Route path='/about' />
            <Route path='/contact' />
            <Route path='/news/:id' element={<SingleNews />} />
            <Route path='/count' element={<Count />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
