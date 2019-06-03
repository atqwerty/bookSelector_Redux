export default function(state, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload
        default:
            return { 'title' : "Book is not selected" };
    }
    // return [
    //     { 'title' : 'not selected' } 
    // ]
}