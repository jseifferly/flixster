import MovieButtons from './MovieButtons';
import '../styles/MovieCard.css'

function MovieCard({loadModal, title, image, rating}) {

    return (
        <article className="MovieCard" onClick={loadModal}>
            <img src={image} alt={title + " poster"} />
            <h3><strong>{title}</strong></h3>
            <p>Rating: {rating}</p>
            <MovieButtons />
        </article>
    );

}

export default MovieCard