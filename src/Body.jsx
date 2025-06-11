import MovieList from "./components/MovieList";
import './Body.css'

function Body({data, load}) {

    return (
        <section className="Body">
            <MovieList data={data} load={load}/>
        </section>
    );

}

export default Body