import './App.css';
import {useState, useEffect} from 'react';
import Taskbar from './Components/Taskbar';
import MovieList from './Components/MovieList';
import movieService from './Services/movieService';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [testOne, setTestOne] = useState([]);
  const [testTwo, setTestTwo] = useState([]);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    movieService
    .getAll()
    .then(data => {
      setMovies(data.results);
      setAllMovies(allMovies.concat(data.results))
    })

    movieService
    .getPage(2)
    .then(data => {
      setTestOne(data.results);
      setAllMovies(allMovies.concat(data.results))
    })

    movieService
    .getPage(3)
    .then(data => {
      setTestTwo(data.results);
      setAllMovies(allMovies.concat(data.results))
    })
  }, []);

  const handleAddList = (newMovie) => {
    console.log("Test ", newMovie);
    const checkList = myList.filter(movie => movie.id === newMovie.id);
    checkList.length === 0 ? setMyList(myList.concat(newMovie)) : alert("Already in List");
  }

  return (
    <div className="App">
      <Taskbar/>
      <h1>My List</h1>
      {myList.length === 0 ? <h4>empty</h4> : <MovieList movies={myList} addMovie={handleAddList} hideButton={true}/>}
      <h1>Movies</h1>
      <MovieList movies={allMovies} addMovie={handleAddList}/>
      <h1>Movies</h1>
      <MovieList movies={movies}/>
      <h1>Movies</h1>
      <MovieList movies={testOne}/>
      <h1>Movies</h1>
      <MovieList movies={testTwo}/>
    </div>
  );
}

export default App;
