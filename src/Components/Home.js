import React, { useEffect, useState } from "react";
import Api from "../Api";

import Header from "./Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listBooks } from "../actions/bookActions";


export const Home=()=>{

    const dispatch = useDispatch();

    const bookList = useSelector(state=>state.bookList);

    const {loading, error, books} = bookList;

    useEffect(()=>{
        dispatch(listBooks());

        console.log(books);
    },[dispatch])

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
                    books && 
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