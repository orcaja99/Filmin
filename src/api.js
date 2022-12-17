import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL
const detailfilm = process.env.REACT_APP_DETAILFILM




export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    console.log({movieList: movie})
    return movie.data.results
    
}

export const getTopratedlist = async () => {
    const topmovie = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`)
    console.log({getTopratedlist: topmovie})
    return topmovie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data
}

