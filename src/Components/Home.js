import React, { useEffect, useState } from "react";
import Api from "../Api";

import Header from "./Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listBooks } from "../actions/bookActions";


export const Home=()=>{

    const dispatch = useDispatch();

    const bookList = useSelector(state=>state.books);
    const {loading, error, books} = bookList;

    useEffect(()=>{
        dispatch(listBooks());
    },[dispatch])

    return (
        <>
        {/* <Header/>
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
                      products.map(e=>{
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
    </main> */}

    <div>CEVA</div>
    
        </>
    );
}