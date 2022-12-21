
import './App.css';
import { ReactDOM } from 'react';
import {getMovieList,searchMovie} from "./api";
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route,useParams,Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import DetailFilm from './pages/detailfilm';
import Navbar1 from './navbar/navbar';


const App = () => {
  const[popularMovies,setPopularMovies] = useState([])
  
  
  
  
  useEffect(() => {
    getMovieList().then((result)=> {
      setPopularMovies(result)

    })
  },[])

  const PopularMoviesList = () => {
    return popularMovies.map((movie,i) => {
      return(
        <div className="Movie-wrapper" key={i}>
            <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMAGEURL}/${movie.poster_path}`} />
            <div className="Movie-title" ><a href={'/detail/'+movie.id}>{movie.title}</a></div>
            <div className="Movie-date">{ movie.release_date}</div><div className="Movie-rate">{movie.vote_average}</div>     
        </div>
      )
    })
  }

  const search = async (q) => {
    if(q.length >3) {
      const query = await searchMovie(q)
      setPopularMovies(query.results)
      console.log({query:query})
    }
  }


 

  return (
    <div className="App">
      <Navbar1/>
      <header className="App-header">
        <h1>Popular Movies</h1>
        <input placeholder='Masukkan film' 
          className='Movie-search' onChange={({target}) => search(target.value)}/>
        <div className="Movie-container">  
          <PopularMoviesList/>
          
        </div>
      </header>
    </div>
  );
}

export default App;
