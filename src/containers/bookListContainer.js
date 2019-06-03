import React from 'react';
import BookList from '../components/bookList';
import { connect } from 'react-redux';
import { selectBookAction } from '../actions/selectBookAction';
import { bindActionCreators } from 'redux';

// const BookListContainer = (props) => {
//     console.log(props);
//     return (
//         <BookList books = {props.books} selectBook = {props.selectBook} />
//     );
// }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectBook: selectBookAction }, dispatch);
}

const mapStateToProps = (state) => {
    return { books: state.books };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)