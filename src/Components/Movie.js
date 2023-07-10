import { useNavigate } from 'react-router-dom';

const Movie = ({movie, addMovie, hideButton}) => {
    const navigate = useNavigate();
    const baseUrl = "https://image.tmdb.org/t/p/w185/";

    const navigateToResult = () => {
        navigate(`/movie/${movie.id}`)
    }

    return (
        <figure className="movie">
            <img src={`${baseUrl}${movie.poster_path}`}></img>
            <figcaption>{movie.original_title}</figcaption>
            {hideButton ? <button onMouseDown={navigateToResult}>View</button> : <button onClick={() => {addMovie(movie)}}>Add to List</button>}
        </figure>
    );
}

export default Movie;