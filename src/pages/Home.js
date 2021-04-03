import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import noImage from '../images/noImage.png';
import { Grid } from '@material-ui/core'

function Home() {

    const [fetchedData, setfetchedData] = useState(null);
    const [input, setinput] = useState("");
    const [search, setsearch] = useState("man")

    const fetchData = async ()=>{
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?apikey=dd6c9e75&s=${search}`);
            setfetchedData(data.Search);
            
        } catch (error) {
            console.log(error)
        }
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
            <Grid style={{width:"100%"}} justify="center" container spacing={2}>
                { fetchedData && 
                    fetchedData.map((item)=>{
                        return(
                            <Grid item>
                                <div>
                                    <div className="poster">
                                        <Link to={`/details/${item.imdbID}`} >
                                            <img src={ item.Poster==="N/A" ? noImage : item.Poster} alt=""/>
                                        </Link>
                                    </div>
                                    <div className="title">
                                        <Link key={item.imdbID} to ={`/details/${item.imdbID}`}>
                                            <a href="">{item.Title}</a>
                                        </Link>
                                    </div>
                                </div>    
                            </Grid>
                        )  
                    })
                }
            </Grid>
            <div className="footer">
               copyright &copy; Shamim Bin Nur
            </div>
        </div>
    )
}



export default Home
