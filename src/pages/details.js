import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import noImage from '../images/noImage.png';

function Details({match}) {
    const [details, setdetails] = useState(null)
    const fetchDetails = async ()=>{
        const data = await axios.get(`https://www.omdbapi.com/?apikey=dd6c9e75&i=${match.params.id}`);
        setdetails(data);
        console.log(data);
    }
    useEffect(() => {
        fetchDetails();
    },[])

    return (
        <div className="main-container">
            <div className="header">
                <h4>Moviefie</h4>
            </div>
            <div className="details-container">
                <div className="flexBox">
                    <div className="cover">
                        {/* <img src={ details && details.data.Poster } alt=""/> */}
                        {details &&
                            <img src={ details.data.Poster==="N/A" ? noImage : details.data.Poster} alt=""/>
                        }
                        
                    </div>
                    <div className="info">
                        <div className="back-button">
                            <Link to='/'>
                                <button>Back to search</button>
                            </Link>
                        </div>
                        <div className="big-title">
                            <p> { details &&  details.data.Title} </p>
                        </div>
                        <div className="type">
                            <p> { details &&  "Type : "+ details.data.Type} </p>
                        </div>
                        <div className="ratings">
                            <p> { details && "Ratings: "+  details.data.imdbRating} </p>
                        </div>
                        <div className="genre">
                            <p>
                                { details && "Gengre: "+ details.data.Genre} 
                            </p>
                        </div>
                        <div className="director">
                            <p>
                                { details && "Director: "+ details.data.Director} 
                            </p>
                        </div>
                        <div className="writer">
                            <p> { details && "Writer : "+  details.data.Writer} </p>
                        </div>
                        <div className="actor">
                            <p> { details && "Actors: "+  details.data.Actors} </p>
                        </div>
                        <div className="language">
                            <p> { details && "Language: "+  details.data.Language} </p>
                        </div>
                        <div className="country">
                            <p> { details && "Country: "+ details.data.Country} </p>
                        </div>
                    </div>

                </div>
                <div className="plot">
                    <p>{ details &&  details.data.Plot} </p>
                </div> 
            </div>
            <div className="footer">
               copyright &copy; Shamim Bin Nur
            </div>
        </div>
    )
}

export default Details
