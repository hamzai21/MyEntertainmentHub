import Movie from '../Components/Movie';

const MovieList = ({movies, addMovie, hideButton}) => {
    console.log(movies);
    return (
        <div className="movie-list">
            {movies.map(movie => <Movie key={movie.id} movie={movie} addMovie={addMovie} hideButton={hideButton}/>)}
        </div>
    )
}

export default MovieList;