import { useEffect, useState, useRef } from 'react'
import '../styles/MovieButtons.css'

export default function MovieButtons({addToFav, addToWatched, movie}) {

    const [faved, setFaved] = useState(movie.liked);
    const [watched, setWatched] = useState(movie.watched);

    useEffect(() => {
        addToFav(movie,faved)
    },[faved])

    const updateFav= evt => {
        evt.stopPropagation();
        setFaved(!faved)
    }

    useEffect(() => {
        addToWatched(movie,watched)
    },[watched])

    const updateWatch = evt => {
        evt.stopPropagation();
        setWatched(!watched)
    }

    return (
        <section className='buttonContainer'>
            <span className='favButton' onClick={updateFav}>{faved? '\u{1F496}':'\u{1F90D}'}</span>
            <span className='watchButton' onClick={updateWatch}>{watched ? '\u{231B}':'\u{23F3}'}</span>
        </section>
    );

}