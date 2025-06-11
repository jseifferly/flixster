import Sort from "./Sort";
import '../styles/SearchForm.css'

function SearchForm({searchFunction, clearFunction, searchTerm, searchTermFunc, sortFunc}) {

    const handleEnter = evt => {
        if(evt.key === 'Enter'){
            searchFunction();
        }
    }


    return (
        <div className="SearchForm">
            <input value={searchTerm} type="text" placeholder="Search..." name="movieSearch" className="SearchBar" onChange={searchTermFunc} onKeyDown={handleEnter}/>
            <button className="searchBtn" onClick={searchFunction}>Submit</button>
            <button className="searchBtn" onClick={clearFunction}>Clear</button>
            <Sort sort={sortFunc}/>
        </div>
    );

}

export default SearchForm