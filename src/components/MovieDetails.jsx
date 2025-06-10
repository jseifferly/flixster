export default function MovieDetails({movie}) {

    return (
        <div>
            <h2 className="movieTitle">movie.title</h2>
            <img src='' alt="" />
            <p>Release Date: movie.release_date</p>
            <p>Overview: movie.overview</p>

        </div>
    );

}