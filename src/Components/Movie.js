const Movie = ({movie}) => {
    const baseUrl = "https://image.tmdb.org/t/p/w185/";
    return (
        <figure className="movie">
            <img src={`${baseUrl}${movie.poster_path}`}></img>
            <figcaption>{movie.original_title}</figcaption>
            <button>Add to List</button>
        </figure>
    );
}

export default Movie;