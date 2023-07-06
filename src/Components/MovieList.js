import Movie from '../Components/Movie';

const MovieList = ({movies}) => {
    console.log(movies);
    return (
        <div className="movie-list">
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    )
}

export default MovieList;