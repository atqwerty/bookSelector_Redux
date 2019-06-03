import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

const rootReducet = combineReducers({
    books: BookReducer,
    activeBook: ActiveBookReducer
})

export default rootReducet