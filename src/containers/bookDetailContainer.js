import React from 'react';
import { connect } from 'react-redux';
import BookDetail from '../components/bookDetail';

// const BookDetailContainer = (props) => {
//     return (
//         <BookDetail activeBook = {props.activeBook} />
//     );
// }

const mapStateToProps = (state) => {
    return { activeBook: state.activeBook }
}

export default connect(mapStateToProps)(BookDetail)