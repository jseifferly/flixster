import { useState, useEffect } from "react";

export default function MovieDetails({movie}) {

    const [movieDetails, setMovieDetails] = useState(null)

    //API Information for call to movie details
    const url = `https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`;
    const API_KEY = import.meta.env.VITE_API_KEY
    const options = {method: 'GET', headers: {accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`}}

    useEffect(() => {
            const fetchMovieData =  async () => {
                try{
                    var res = await fetch(url, options)
                    if(res.ok){
                        const data = await res.json();
                        console.log(data)
                        setMovieDetails(data);
                    }else{
                        throw new Error("API Not Responding")
                    }
                }catch(error){
                    console.error("Error: ", error.message)
                }
            }
            fetchMovieData();
        },[movie])


    //Path info for movie posters
    const imgURL = 'https://image.tmdb.org/t/p'
    const posterSize = '/w500'

    //Function to turn genre array into a string varible
    function genreString(genres) {
        let ret = ''
        for(var i = 0; i < genres.length; ++i){
            ret += (genres[i].name + ', ')
        }
        return ret.slice(0, -2)
    }

    if(movieDetails === null){
        return(<p>Loading...</p>)
    }

    return (
        <div>
            <h2 className="movieTitle">{movie.title}</h2>
            <img src={imgURL + posterSize + movie.backdrop_path} alt={movie.title + ' backdrop'} />
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Overview:</strong> {movie.overview}</p>
            <p><strong>Genres: </strong> {genreString(movieDetails.genres)}</p>
            <p><strong>Runtime: </strong> {movieDetails.runtime} minutes</p>

        </div>
    );

}