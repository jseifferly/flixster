import MovieList from "./components/MovieList";
import './Body.css'

function Body({data, load}) {

    return (
        <div className="Body">
            <MovieList data={data} load={load}/>
        </div>
    );

}

export default Body