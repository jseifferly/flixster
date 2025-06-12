import { useEffect, useState, useRef } from 'react'
import '../styles/MovieButtons.css'

export default function MovieButtons({addToFav, addToWatched, movie}) {

    const [faved, setFaved] = useState(false);
    const [watched, setWatched] = useState(false);

    const hadPageBeenRendered = useRef(false)

    useEffect(() => {
        if(hadPageBeenRendered.current){
            addToFav(movie,faved)
            return
        }

        hadPageBeenRendered.current = true;
    },[faved])

    const updateFav= evt => {
        evt.stopPropagation();
        setFaved(!faved)
    }

    useEffect(() => {
        if(hadPageBeenRendered.current){
            addToWatched(movie,watched)
            return
        }

        hadPageBeenRendered.current = true;
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