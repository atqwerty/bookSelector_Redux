import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import BookList from '../containers/bookList';
import BookDetailed from '../containers/bookDetail';
import Test from './Test';

function App() {
  return (
    <div>
      <ul>
        <BookList />
      </ul>
      <div>
        <BookDetailed />
      </div>
      <BrowserRouter>
        <Link to="/test">Test</Link> { /* adds 'a' to app */}
        <Route path="/test" component = {Test} />
      </BrowserRouter>
    </div>
  );
}

export default App;
