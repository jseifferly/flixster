import { useState, useEffect } from 'react'
import '../styles/Modal.css'
import '../styles/Close.css'
import MovieDetails from './MovieDetails';


export default function Modal({display, closeModal, movie}){

    return (
        <div>
            <section className={display ? 'modalDisplay' : 'modalHidden'}>
                <article className="modalContent"> 
                <span onClick={closeModal} className='Close' >X</span>
                <MovieDetails movie={movie}/>
                </article>
            </section>
        </div>
    );

}