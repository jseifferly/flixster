import '../styles/MovieCard.css'

function MovieCard({title, image, rating}) {

    return (
        <div className="MovieCard">
            <img src={image} alt="" />
            <h3><strong>{title}</strong></h3>
            <p>Rating: {rating}</p>
        </div>
    );

}

export default MovieCard