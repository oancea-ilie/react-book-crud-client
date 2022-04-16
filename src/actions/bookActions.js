import { BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAIL } from "../constants/booksConstants"
import axios from "axios"

export const listBooks = ()=> async(dispatch)=>{

    try {
        dispatch( { type: BOOK_LIST_REQUEST});

        const books = await axios.get('/api/v1/books');


        dispatch( {
            type: BOOK_LIST_SUCCESS,
            payload : books
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