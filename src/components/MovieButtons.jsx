import { useState } from 'react'
import '../styles/MovieButtons.css'

export default function MovieButtons() {

    const handleClick = evt => {
        evt.stopPropigation();
    }

    return (
        <section className='buttonContainer'>
            <span className='favButton' onClick={handleClick}>{'\u{1F90D}'}</span>
            <span className='watchButton' onClick={handleClick}>{'\u{23F3}'}</span>
        </section>
    );

}