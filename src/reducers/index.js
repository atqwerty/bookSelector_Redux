import { combineReducers } from 'redux';
import BookReducer from './reducerBooks';
import ActiveBookReducer from './reducerActiveBook';

const rootReducet = combineReducers({
    books: BookReducer,
    activeBook: ActiveBookReducer
})

export default rootReducet