import axios from 'axios'


const movieBaseUrl  ="https://api.themoviedb.org/3"
const api_key = "65ac958c38f1ee940d39fc965b705605 "

const getVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`)

const moviesBygenreBaseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=65ac958c38f1ee940d39fc965b705605'
const getMoviesById = (id)=> {
    axios.get(`${moviesBygenreBaseUrl}&with_genres=${id}`)
}


export  default {getVideos, getMoviesById}