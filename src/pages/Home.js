import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import noImage from '../images/noImage.png';
import { Grid } from '@material-ui/core'
import { motion } from 'framer-motion';

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
        <motion.div className="main-container"
            initial={{ opacity: 0, y: -20,  }}
            animate={{ opacity: 1,  y: +20  }}
            transition={{ delay: .4 }}
        >
            <div className="header">
                <motion.h4
                    initial={{ opacity: 0, y: -20  }}
                    animate={{ opacity: 1,  y:+20  }}
                    transition={{ delay: .5, type:'spring', stiffness: 500 }}
                >
                    Moviefie
                </motion.h4>
            </div>
            <motion.div className="search"
                initial={{ opacity: 0,  y: 40, scale: 0.92  }}
                animate={{ opacity: 1,  y: 20, scale: 1 }}
                transition={{ delay: .5, type:'spring', stiffness: 150 }}
            >
                <form onSubmit={submitHandler}>
                    <motion.input transition={{ type:'tween', stiffness: 1500 }} whileHover={{ scale: 1.03 }} placeholder="Search here" value={input} onChange={inputHander} type="text"/>
                    <motion.button transition={{ type:'transition', stiffness: 200 }} > <i class="fas fa-search"></i></motion.button>
                   
                </form>
            </motion.div>
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
        </motion.div>
    )
}



export default Home
