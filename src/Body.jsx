import MovieList from "./components/MovieList";
import './Body.css'

function Body({data}) {

    return (
        <div className="Body">
            <MovieList data={data}/>
        </div>
    );

}

export default Body