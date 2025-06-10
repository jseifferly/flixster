import './Sort.css'

function Sort() {

    return (
        <div className='SortBtn'>
            <select name="Sort">
                <option value="sort" disabled>Sort By</option>
                <option value="title">Title (A-Z)</option>
                <option value="releaseDate">Release Date (Most Recent)</option>
                <option value="voteAvergae">Vote Average (Descending)</option>
            </select>
        </div>
    );

}

export default Sort