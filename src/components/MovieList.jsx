import { useState, useEffect } from "react";
import Modal from "./Modal";
import MovieCard from "./MovieCard";
import '../styles/MovieList.css'
import '../styles/LoadButton.css'

////Path info for movie posters
const imgURL = 'https://image.tmdb.org/t/p'
const posterSize = '/w500'

export default function MovieList({data,load}) {

    //Modal state data
    const [show, setShow] = useState(false);
    const [mov, setMov] = useState({})

    const close = () => setShow(false);
    const open = id => event => {
        setMov(data.find(movie => movie.id === id))
        setShow(true);

    }
    return (
        <>
        <div className="MovieList">
            {data.map((movie) => {
                return <MovieCard loadModal={open(movie.id)} title={movie.title} image={imgURL + posterSize + movie.poster_path} rating={movie.vote_average} key={movie.id}/>
            })};
        </div>
        <button className="loadMore" onClick={load}>Load More</button>
        <Modal display={show} closeModal={close} movie={mov}/>
        </>
    );

}