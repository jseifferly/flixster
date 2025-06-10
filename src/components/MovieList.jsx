import { useState, useEffect } from "react";
import Modal from "./Modal";
import MovieCard from "./MovieCard";
import '../styles/MovieList.css'
import '../styles/LoadButton.css'

//API Info for fetch
const API_KEY = import.meta.env.VITE_API_KEY
const options = {method: 'GET', headers: {accept: 'application/json',
    Authorization: 'Bearer ' +  API_KEY}
}

//Path info for movie posters
const imgURL = 'https://image.tmdb.org/t/p'
const posterSize = '/w500'

export default function MovieList() {

    //Store state of movie data and current page num
    const [movieData, setMovieData] = useState([])
    const [pageNum, setPageNum] = useState(1)

    //URL for featching data from API
    const URL = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNum}`

    useEffect(() => {
        const fetchMovieData =  async () => {
            try{
                var res = await fetch(URL, {method: 'GET', headers: {accept: 'application/json',
                                            Authorization: `Bearer ${API_KEY}`}})
                if(res.ok){
                    const data = await res.json();
                    setMovieData([...movieData, ...data.results]);
                }else{
                    throw new Error("API Not Responding")
                }
            }catch(error){
                console.error("Error: ", error.message)
            }
        }
        fetchMovieData();
    },[pageNum])

    const load = () => setPageNum(pageNum + 1)

    //Modal state data
    const [show, setShow] = useState(false);

    const close = () => setShow(false);
    const open = id => event => {
        setShow(true);
    }

    return (
        <>
        <div className="MovieList">
            {movieData.map((movie) => {
                return <MovieCard loadModal={open(movie.id)} title={movie.title} image={imgURL + posterSize + movie.poster_path} rating={movie.vote_average} key={movie.id}/>
            })};
        </div>
        <button className="loadMore" onClick={load}>Load More</button>
        <Modal display={show} closeModal={close}/>
        </>
    );

}