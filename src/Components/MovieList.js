import {useState, useRef} from 'react';
import Movie from '../Components/Movie';

const MovieList = ({movies, addMovie, hideButton}) => {
    const [display, setDisplay] = useState("not-displayed");
    const listRef = useRef();

    const toggleButton = event => {
        event.preventDefault();
        event.type === "mouseenter" ? setDisplay("displayed") : setDisplay("not-displayed");
    }

    const scrollRight = () => {
        listRef.current.scrollBy(1900, 0);
    }

    const scrollLeft = () => {
        listRef.current.scrollBy(-1900, 0);
    }

    return (
        <div 
        ref={listRef}
        className="movie-list" 
        onMouseEnter={e => toggleButton(e)}
        onMouseLeave={e => toggleButton(e)}
        >
            <button onClick={scrollLeft} className={["scroll-left-button", display].join(' ')}>&larr;</button>
            {movies
            .map(movie => 
            <Movie 
            key={movie.id} 
            movie={movie} 
            addMovie={addMovie} 
            hideButton={hideButton}
            />)}
            <button onClick={scrollRight} className={["scroll-right-button", display].join(' ')}>&rarr;</button>
        </div>
    )
}

export default MovieList;