import { useState, useEffect } from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent.jsx';
import NewsList from './components/NewsList/NewsList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleNews from './components/SingleNews.jsx';
import NotFound from './components/NotFound.jsx';
import Count from './components/Count.jsx';
import axios from 'axios';
import {Provider} from 'react-redux';
import store from './redux/store.js';

function App() {

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let res = await axios.get('https://newsapi.org/v2/top-headlines?apiKey=f4f08702ff3f487fb62ee4cf6eb1760e&country=in');

        setNewsList(res.data.articles);
      } catch (err) {

        console.log(err);
      }
    }
    fetchNews();
  }, [])

  return (
    <div className='App'>
      <Provider store ={ store }>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path='/' element={<NewsList newsList={newsList} />} />
            <Route path='/about' />
            <Route path='/contact' />
            <Route path='/news/:id' element={<SingleNews newsList={newsList} />} />
            <Route path='/count' element={<Count />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
