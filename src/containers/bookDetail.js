import React, { Component } from 'react';
import BookReducer from '../reducers/reducerBooks';
import { connect } from 'react-redux';


const BookDetail = (props) => {
    let bookDetail = props.activeBook.title;

    return (bookDetail);
}       

const mapStateToProps = (state) => {
    return { activeBook: state.activeBook }
}

export default connect(mapStateToProps)(BookDetail)