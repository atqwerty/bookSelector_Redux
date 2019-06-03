import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import BookList from './bookList';
import BookDetailed from './bookDetail';
import BookListContainer from '../containers/bookListContainer';
import BookDetailContainer from '../containers/bookDetailContainer';
import Test from './Test';
import bookListContainer from '../containers/bookListContainer';

function App() {
  return (
    <div>
      {/* <ul>
        <BookList />
      </ul>
      <div>
        <BookDetailed />
      </div> */}
      <ul>
        <BookListContainer />
      </ul>
      <div>
        <BookDetailContainer />
      </div>
      <BrowserRouter>
        <Link to="/test">Test</Link> 
        <Route path="/test" component = {Test} />
      </BrowserRouter>
    </div>
  );
}

export default App;
