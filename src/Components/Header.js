import React  from "react";
import NewBook from "./NewBook";


import { Link } from "react-router-dom";
export default ()=>{

    return(
        <header>
             <h1>Books</h1>
             <Link to="/add-book" className="add">Create New Book</Link>
        </header>
        );
}
