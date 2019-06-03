import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from '../containers/book-list';
import BookDetailed from '../containers/book-detail';


function App() {
  return (
    <div>
      <BookList />
      <BookDetailed />
    </div>
  );
}

export default App;
