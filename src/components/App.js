import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BookList from '../containers/book-list';
import BookDetailed from '../containers/book-detail';
import Test from './Test';

function App() {
  return (
    <div>
      <ul>
        <BookList />
      </ul>
      <BookDetailed />
      <BrowserRouter>
        <Link to="/test">Test</Link> { /* adds 'a' to app */}
        <Route path="/test" component = {Test} />
      </BrowserRouter>
    </div>
  );
}

export default App;
