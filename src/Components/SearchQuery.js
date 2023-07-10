import { useNavigate } from 'react-router-dom';

const SearchQuery = ({movie}) => {
    const navigate = useNavigate();
    const baseUrl = "https://image.tmdb.org/t/p/w185/";
    const noPosterFound = "https://p.kindpng.com/picc/s/22-223863_no-avatar-png-circle-transparent-png.png";

    const handleOnError = (e) => {
        e.target.src = noPosterFound;
    }

    const navigateToResult = () => {
        navigate(`/movie/${movie.id}`)
    }

    return (
        <div className="search-result" onMouseDown={navigateToResult}>
            {movie.poster_path ? <img src={`${baseUrl}${movie.poster_path}`} onError={handleOnError}/> : <img src={noPosterFound}/>}
            <span>{movie.original_title}</span>
            <br/>
            <span>{movie.release_date.slice(0,4)}</span>
        </div>
    )
}

export default SearchQuery;