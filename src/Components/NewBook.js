import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom"; 
import { AddBooks } from "../actions/bookActions";
// Link pentru a crea un link si useHistory pentru a putea facem back to home

export const NewBook=()=>{

    let [tile,setTitle] = useState(""); // retinem intr-un state title si toate propietatiile

    let [author, setAuthor] = useState("");

    let [genre, setGenre] = useState("");

    let [year, setYear] = useState("");

    let [err,setErrors]=useState([]);

    let dispatch = useDispatch();

    const State = useSelector(state=>state.bookAdd);

    const {error, book} = State;

    const history = useHistory(); // cream history pentru back to home page

    useEffect(()=>{ // apela funcia check de ficare data cand se modifica title, author etc, si retinem starea.

        check();

    },[tile,author,genre,year]);


    let check=()=>{
        
        setErrors([]); // setam err goala si o umplem in functie de erorile pe care le avem.

       if(tile == ""){
          setErrors((prev=>{
            return [...prev,"title is required" ];
       }));
       }

       if(author == ""){
           setErrors((prev=>{
               return [...prev, "author is required"];
           }));
       }
       if(genre == ""){
           setErrors((prev=>{
               return [...prev, "genre is required"];
           }));
       }
       if(year == ""){
           setErrors ((prev=>{
               return [...prev, "year is required"];
           }));
       }

    }

    let onChangeHandler=(e)=>{
        e.preventDefault();

        let obj = e.target;

        if(obj.classList.contains("title")){
            setTitle(obj.value);
        }else if(obj.classList.contains("author")){
            setAuthor(obj.value);
        }else if(obj.classList.contains("genre")){
            setGenre(obj.value);
        }else if(obj.classList.contains("year")){
            setYear(parseInt(obj.value));
        }

    }

    let onSubmit= async(e)=>{

        check();

        if(err.length == 0){
        
            let obj ={
                title: tile,
                author: author,
                genre : genre,
                year: year
            }


            dispatch(AddBooks(obj));
            
        }else{
            err.forEach(e=>alert(e));
        }


    }


    useEffect(()=>{
        if(book){
            console.log(book);
        }else{
            console.log('nu este carte');
        }
        if(error){
            console.log(error);
        }else{
            console.log('nu e eroare');

        }
    },[book, error])







    return(
        <section className="add-main">
            <h1>New Book</h1>
            <div className="add-container" onChange={onChangeHandler}>
                <div className="input-card">
                    <p>Title</p>
                    <input type="text" className="title"/>
                </div>
                <div className="input-card">
                    <p>Author</p>
                    <input type="text" className="author"/>
                </div>
                <div className="input-card">
                    <p>Genre</p>
                    <input type="text" className="genre"/>
                </div>
                <div className="input-card">
                    <p>Year</p>
                    <input type="text" className="year"/>
                </div>
                <div className="btns">
                    <a href="#" className="add-book" onClick={onSubmit}>Create New Book</a>
                    <Link to="/" className="cancel" >Cancel</Link>
                </div>
            </div>
        </section>
    );
}