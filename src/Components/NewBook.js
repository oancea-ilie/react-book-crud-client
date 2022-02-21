import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Api from "../Api";

export default ()=>{

    let [tile,setTitle]=useState("");

    let [author, setAuthor] = useState("");

    let [genre, setGenre] = useState("");

    let [year, setYear] = useState("");

    let [err,setErrors]=useState([]);


    const history=useHistory();
    useEffect(()=>{

        check();

    },[tile,author,genre,year]);


    let check=()=>{
        
        setErrors([]);

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

        let obj=e.target;

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

        if(err.length==0){
        
        let obj ={
            title: tile,
            author: author,
            genre : genre,
            year: year
        }

        let api = new Api();
        let rez = await api.addBook(obj);

        if(rez == 'success'){
            history.push("/");
        }else{
            alert(rez.message);
        }


     }else{
        
        err.forEach(e=>alert(e));
         
     }


    }

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