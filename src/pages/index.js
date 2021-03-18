import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import noImage from '../images/noImage.png';

function Index() {

    const [fetchedData, setfetchedData] = useState(null);
    const [input, setinput] = useState("");
    const [search, setsearch] = useState("Man")

    const fetchData = async ()=>{
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=dd6c9e75&s=${search}`);
    setfetchedData(data.Search);
  }

  

  useEffect(() => {
    fetchData();
  }, [search])


  const inputHander = (e)=>{
      setinput(e.target.value);
  }

  const submitHandler = (e)=>{
      e.preventDefault();
      setsearch(input);
  }


    return (
        <div className="main-container">
            <div className="header">
                <h4>Moviefie</h4>
            </div>
            <div className="search">
                <form onSubmit={submitHandler}>
                    <input placeholder="Search here" value={input} onChange={inputHander} type="text"/>
                    <button> <i class="fas fa-search"></i></button>
                   
                </form>
            </div>
            <div className="cart-container">
                { fetchedData && 
                    fetchedData.map((item)=>{
                        return(
                            <div className="cart-body">
                            <div className="cart">
                                <div className="poster">
                                    <Link to={`/details/${item.imdbID}`} >
                                        <img src={ item.Poster=="N/A" ? noImage : item.Poster} alt=""/>
                                    </Link>
                                </div>
                                <div className="title">
                                    <Link key={item.imdbID} to ={`/details/${item.imdbID}`}>
                                        <a href="">{item.Title}</a>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                        )  
                    })
                }

            </div>
        </div>
    )
}



export default Index
