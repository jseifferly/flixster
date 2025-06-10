import Sort from "./Sort";
import './SearchForm.css'

function SearchForm() {

    return (
        <div className="SearchForm">
            <input type="text" placeholder="Search..." name="movieSearch"/>
            <button>Submit</button>
            <button>Clear</button>
            <Sort />
        </div>
    );

}

export default SearchForm