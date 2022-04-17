import { applyMiddleware, combineReducers, createStore } from "redux";
import { bookListReducer } from "./reducers/bookReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { bookAddReducer } from "./reducers/bookReducers";

const reducer = combineReducers({

    bookList: bookListReducer,
    bookAdd: bookAddReducer,
})


const middleware = [thunk];

const initialState={
  
}


export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);