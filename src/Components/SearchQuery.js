const SearchQuery = ({movie}) => {
    const baseUrl = "https://image.tmdb.org/t/p/w185/";

    return (
        <div className="search-result">
            <img src={`${baseUrl}${movie.poster_path}`}/>
            <span>{movie.original_title}</span>
            <br/>
            <span>{movie.release_date.slice(0,4)}</span>
        </div>
    )
}

export default SearchQuery;