import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBookAction } from '../actions/selectBookAction';
import { bindActionCreators } from 'redux';

const BookList = (props) => {
    
    return (
        // pass props not mapping
        props.books.map( book => {
            return (
                <li
                key = { book.title }
                onClick = { () => props.selectBook(book) }
                className = "list-group-item"
                >
                    { book.title }
                </li>
            );
        })
    );
}

// const renderList = (props) => {
//     return props.books.map( book => {
//         return (
//             <li
//                 key = { book.title }
//                 onClick = { () => props.selectBook(book) }
//                 className = "list-group-item"
//             >
//                 { book.title }
//             </li>
//         )
//     })
// };

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectBook: selectBookAction }, dispatch);
}

const mapStateToProps = (state) => {
    return { books: state.books }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)