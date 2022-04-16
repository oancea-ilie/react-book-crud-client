import { applyMiddleware, combineReducers, createStore } from "redux";
import { bookListReducer } from "./reducers/bookReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const reducer = combineReducers({

    bookList: bookListReducer
})


const middleware = [thunk];




const initialState={

  
}


export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);