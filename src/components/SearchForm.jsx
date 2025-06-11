import Sort from "./Sort";
import '../styles/SearchForm.css'

function SearchForm() {

    return (
        <div className="SearchForm">
            <input type="text" placeholder="Search..." name="movieSearch" className="SearchBar"/>
            <button className="searchBtn">Submit</button>
            <button className="searchBtn">Clear</button>
            <Sort />
        </div>
    );

}

export default SearchForm