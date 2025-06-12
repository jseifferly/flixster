import { useState, useEffect } from "react";
import Modal from "./Modal";
import MovieCard from "./MovieCard";
import '../styles/MovieList.css'
import '../styles/LoadButton.css'

export default function MovieList({data,load,addToFav, addToWatch}) {
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
        <section className="MovieList">
                {data.map((movie) => {
                    return <MovieCard movie={movie} loadModal={open(movie.id)} key={movie.id}
                    addToFavs={addToFav} addToWatched={addToWatch}/>
                })};
        </section>
        <button className="loadMore" onClick={load}>Load More</button>
        <Modal display={show} closeModal={close} movie={mov}/>
        </>
    );
}