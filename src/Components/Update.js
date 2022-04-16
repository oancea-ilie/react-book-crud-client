import React, { useEffect, useState } from "react";
import Api from "../Api";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export default ()=>{

    let [title, setTitle] = useState("");

    let [author, setAuthor] = useState("");

    let [genre, setGenre] = useState("");

    let [year, setYear] = useState("");

    let [err,setErrors]=useState([]);

    const history = useHistory();

    let{bookId} = useParams(); // luam id-ul trimis din parametrii de la home

    let api = new Api();
    
    let getBook=async(id)=>{
        let book = await api.getBookById(id);

        setTitle(book.title);
        setAuthor(book.author);
        setGenre(book.genre);
        setYear(book.year);

    }

    useEffect(()=>{
        
        getBook(bookId);
    
    },[]);

    useEffect(()=>{
        check();

    },[title,author,genre,year]);

    let onChangeHandler=(e)=>{
        check();
        e.preventDefault();
        let obj = e.target;

        if(obj.classList.contains("title")){
            setTitle(obj.value);
        }else if(obj.classList.contains("author")){
            setAuthor(obj.value);
        }else if(obj.classList.contains("genre")){
            setGenre(obj.value);
        }else if(obj.classList.contains("year")){
            setYear(obj.value);
        }

    }

    let check=()=>{
        
        setErrors([]);

       if(title == ""){
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

       console.log(err);
    }

    let updateHandle=async()=>{
        
        check();

        if(err.length ==0){
            let ob = {
                title: title,
                author : author,
                genre : genre,
                year: year
            }
    
            await api.updateBook(ob, bookId);
    
            history.push("/");
        }else{
            err.forEach(e=>alert(e));
        }
    }

    let deleteHandle=async()=>{
        let rez = await api.deleteBook(bookId);

        if(rez == "delete success"){
            setTitle("");
            setAuthor("");
            setGenre("");
            setYear("");
            history.push("/");
        }else{
            alert(rez.message);
        }
    }

    
    return(
        <section className="add-main">
            <h1>Update Book</h1>
            <div className="add-container" onChange={onChangeHandler}>
                <div className="input-card">
                    <p>Title</p>
                    <input type="text" className="title" defaultValue={title} />
                </div>
                <div className="input-card">
                    <p>Author</p>
                    <input type="text" className="author" defaultValue={author}/>
                </div>
                <div className="input-card">
                    <p>Genre</p>
                    <input type="text" className="genre" defaultValue={genre}/>
                </div>
                <div className="input-card">
                    <p>Year</p>
                    <input type="text" className="year" defaultValue={year}/>
                </div>

                <div className="btns">
                    <a href="#" className="update-book" onClick={updateHandle}>Update Book</a>
                    <Link to="/" className="cancel">Cancel</Link>
                    <a href="#"  className="delete-book"onClick={deleteHandle} >Delete Book</a>
                </div>
            </div>
    </section>
    );
}