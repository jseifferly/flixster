import MovieCard from "./MovieCard";
import './MovieList.css'

const baseURL = 'https://image.tmdb.org/t/p'
const posterSize = '/w500'

function MovieList({data}) {

    return (
        <div className="MovieList">
            {data.map((movie) => {
                return <MovieCard title={movie.title} image={baseURL + posterSize + movie.poster_path} rating={movie.vote_average} />
            })};
        </div>
    );

}

export default MovieList