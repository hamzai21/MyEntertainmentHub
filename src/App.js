import './App.css';
import {useState, useEffect} from 'react';
import Taskbar from './Components/Taskbar';
import MovieList from './Components/MovieList';
import movieService from './Services/movieService';

function App() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    movieService
    .getAll()
    .then((data) => {
      setMovies(data.results);
    })
  }, []);

  return (
    <div className="App">
      <Taskbar/>
      <h1>Movies</h1>
      <MovieList movies={Movies}/>
    </div>
  );
}

export default App;
