import SearchForm from "./components/SearchForm";
import './Header.css'

function Header({search,clear,searchTermFunction,searchString, sortFunc}) {

    return (
        <div className="Header">
            <h1>Flixster</h1>
            <SearchForm searchTerm={searchString} searchFunction={search} clearFunction={clear} searchTermFunc={searchTermFunction} sortFunc={sortFunc}/>
        </div>
    );

}

export default Header
