import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const BookDetail = (props) => {
    console.log(props);
    return (props.activeBook.title);
}

const mapStateToProps = (state) => {
    return { activeBook: state.activeBook }
}

export default connect(mapStateToProps)(BookDetail)