import React, { Component } from 'react';
import { connect } from 'react-redux';

function BookDetail(props) {
    let bookDetail = "No Book Selected!";
    if(props.activeBook) {
        bookDetail = props.activeBook.title;
    }
    return (
        <div>{ bookDetail }</div>
    )
}

function mapStateToProps(state) {
    return { activeBook: state.activeBook }
}

export default connect(mapStateToProps)(BookDetail)