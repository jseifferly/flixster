import '../styles/MovieCard.css'

function MovieCard({loadModal, title, image, rating}) {

    return (
        <div className="MovieCard" onClick={loadModal}>
            <img src={image} alt="" />
            <h3><strong>{title}</strong></h3>
            <p>Rating: {rating}</p>
        </div>
    );

}

export default MovieCard