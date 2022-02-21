import React, { useEffect, useState } from "react";
import Api from "../Api";

import Header from "./Header";


import { Link } from "react-router-dom";


export default ()=>{

    let [books, setBooks] = useState([]);

    let api = new Api();

    let allboks = async()=>{
        let rez = await api.getAllBooks();

        if(rez != 0){
            setBooks(rez);
        }
    }

    useEffect(()=>{

        allboks();

    },[]);

    return (
        <>
        <Header/>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                  {
                      books.map(e=>{
                        return <tr key={e.id}>
                                <td><Link className="title-link" to={`/update/${e.id}`}>{e.title}</Link></td>
                                <td>{e.author}</td>
                                <td>{e.genre}</td>
                                <td>{e.year}</td>
                             </tr>
                      })
                  }
                </tbody>
        </table>
    </main>
    
</>
    );
}