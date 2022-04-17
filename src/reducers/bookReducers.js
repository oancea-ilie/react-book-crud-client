import { BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAIL, ADD_LIST_REQUEST,ADD_LIST_FAIL,ADD_LIST_SUCCESS} from "../constants/booksConstants"


export const bookListReducer = (state = { books: []}, action)=>{
    switch(action.type){
        case BOOK_LIST_REQUEST:
            return {loading: true, books: [] }
        case BOOK_LIST_SUCCESS:
            return {
                loading: false,
                books: action.payload
            }
        case BOOK_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export const bookAddReducer = (state = {}, action)=>{
    switch(action.type){
        case ADD_LIST_REQUEST:
            return {loading: true}
        case ADD_LIST_SUCCESS:
            return {
                loading: false,
                book: action.payload
            }
        case ADD_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}