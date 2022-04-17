import { BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAIL, ADD_LIST_REQUEST,ADD_LIST_FAIL,ADD_LIST_SUCCESS} from "../constants/booksConstants"

import axios from "axios"

export const listBooks = ()=> async(dispatch)=>{

    try {
        dispatch( { type: BOOK_LIST_REQUEST});

        const books = await axios.get('/api/v1/books');

        console.log(books.data);
        dispatch( {
            type: BOOK_LIST_SUCCESS,
            payload : books.data
        })
        


    } catch (error) {
        
        dispatch( { 
            type: BOOK_LIST_FAIL,
            payload: error.response && error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
    
}

export const AddBooks = (obj)=> async(dispatch)=>{

    try {
        dispatch( { type: ADD_LIST_REQUEST});

        const book = await axios.post('/api/v1/books', obj);

        dispatch( {
            type: ADD_LIST_SUCCESS,
            payload : book.status
        })

    } catch (error) {
        
        dispatch( { 
            type: ADD_LIST_FAIL,
            payload: error.response && error.response.data.message
            ?error.response.data.message
            :error.message
        })
    }
    
}