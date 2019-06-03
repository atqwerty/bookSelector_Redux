import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBookAction } from '../actions/select-book-action';
import { bindActionCreators } from 'redux';

function BookList(props) {
    const renderList = () => {
        return props.books.map( book => {
            return (
                <li
                    key = { book.title }
                    onClick = { () => props.selectBook(book) }
                    className = "list-group-item"
                >
                    { book.title }
                </li>
            )
        })
    };

    return (
        <ul className = "list-group">
            { renderList() }
        </ul>
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBookAction }, dispatch);
}

function mapStateToProps(state) {
    return { books: state.books }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)