import './App.css';
import { ReactDOM } from 'react';
import {getMovieList,getTopratedlist,searchMovie} from "./api";
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route,useParams,Link } from "react-router-dom";



import DetailFilm from './pages/detailfilm';
import Navbar1 from './navbar/navbar';


const Topratednya = () => {
  const[topMovies,settopMovies] = useState([])
  
  
  
  
  useEffect(() => {
    getTopratedlist().then((result)=> {
      settopMovies(result)

    })
  },[])

  const TopMoviesList = () => {
    return topMovies.map((movie,i) => {
      return(
        <div className="Movie-wrapper" key={i}>
            <div className="Movie-title" ><a href={'/detail/'+movie.id}>{movie.title}</a></div>
            <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMAGEURL}/${movie.poster_path}`} />
            <div className="Movie-date">Release Date: { movie.release_date}</div>
            <div className="Movie-rate">Rating: {movie.vote_average}</div>     
        </div>
      )
    })
  }

  const search = async (q) => {
    if(q.length >3) {
      const query = await searchMovie(q)
      settopMovies(query.results)
      console.log({query:query})
    }
  }


 

  return (
    <div className="App">
      <Navbar1/>
      <header className="App-header">
        <h1>Top Rated Movies</h1>
        <input placeholder='Masukkan film' 
          className='Movie-search' onChange={({target}) => search(target.value)}/>
        <div className="Movie-container">  
          <TopMoviesList/>
          
        </div>
      </header>
    </div>
  );
}

export default Topratednya;