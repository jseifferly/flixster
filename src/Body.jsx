import MovieList from "./components/MovieList";
import './Body.css'

function Body({data, load, addToFav, addToWatch}) {

    return (
        <section className="Body">
            <MovieList data={data} load={load} addToFav={addToFav} addToWatch={addToWatch}/>
        </section>
    );

}

export default Body