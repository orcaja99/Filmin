
import {getdetailfim, getMovieList,searchMovie} from "../api"
import { useEffect } from 'react';
import { useState } from 'react';
import App from "../App";
import './detailfilm.css';
import { BrowserRouter as Router, Route,useParams,Link } from "react-router-dom";
import Navbar1 from "../navbar/navbar";



const DetailFilm =  () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=65d7a56e28a13f5de90441794a69801c&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return (
        <div> <Navbar1/> 
        <div className="detail-film">
            <header className="title">
                <h1>Detail film</h1>
            </header>
            <div className="wrapper-detail">
              <img className="movie-poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                <div className="desk">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                <div className="rilis">{currentMovieDetail ? currentMovieDetail.release_date : ""}</div>
                <div className="rate">Rating: {currentMovieDetail ? currentMovieDetail.vote_average : ""}</div> 
                <div className="movie__genres">
                {
                    currentMovieDetail && currentMovieDetail.genres
                    ? 
                    currentMovieDetail.genres.map(genre => (
                        <><span className="movie__genre" id={genre.id}>{genre.name}</span> </>
                        )) 
                        : 
                        ""
                    }
                </div> 
                <div className="sinopsis">{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
            </div>
            
            


        </div>
    </div>
);

    
};
export default DetailFilm ;