import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import '../styles/MovieList.css'

//API Info for fetch
const URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}'
const API_KEY = import.meta.env.VITE_API_KEY
const options = {method: 'GET', headers: {accept: 'application/json',
    Authorization: 'Bearer ' +  API_KEY}
}

//Path info for movie posters
const baseURL = 'https://image.tmdb.org/t/p'
const posterSize = '/w500'

export default function MovieList({data}) {

    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        const fetchMovieData =  async () => {
            try{
                const res = await fetch(URL, options)
                if(res.ok){
                    const data = await res.json();
                    setMovieData(data.results)
                }else{
                    throw new Error("API Not Responding")
                }
            }catch(error){
                console.error("Error: ", error.message)
            }
        }
        fetchMovieData();
    },[])

    return (
        <div className="MovieList">
            {movieData.map((movie) => {
                return <MovieCard title={movie.title} image={baseURL + posterSize + movie.poster_path} rating={movie.vote_average} key={movie.id}/>
            })};
        </div>
    );

}