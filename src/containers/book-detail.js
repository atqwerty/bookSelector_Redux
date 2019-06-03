import React, { Component } from 'react';
import BookReducer from '../reducers/reducer_books';
import { connect } from 'react-redux';


const BookDetail = (props) => {
    let bookDetail = props.activeBook.title;

    return (
        <div>{ bookDetail }</div>
    )
}       

const mapStateToProps = (state) => {
    return { activeBook: state.activeBook }
}

export default connect(mapStateToProps)(BookDetail)