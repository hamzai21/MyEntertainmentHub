import './App.css';
import {useState, useEffect} from 'react';
import movieService from './Services/movieService';
import axios from 'axios';
import Taskbar from '../src/Components/Taskbar';
import MovieList from '../src/Components/MovieList';


function App() {
  const [movies, setMovies] = useState([]);
  const [testOne, setTestOne] = useState([]);
  const [testTwo, setTestTwo] = useState([]);
  const [myList, setMyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/api/movies')
    .then(response => { setMyList(response.data)})
    .catch(error => {
      console.log(error);
    })

    movieService.getAll()
    .then(data => {
      setMovies(movies.concat(data.results));
      })
    movieService.getPage(2)
    .then(data => {
      setTestOne(testOne.concat(data.results));
    })
    movieService.getPage(3)
    .then(data => {
      setTestTwo(testTwo.concat(data.results));
    })
    setIsLoading(false);
  }, []);

  const handleAddList = (newMovie) => {
    console.log("Test ", newMovie);
    const checkList = myList.filter(movie => movie.id === newMovie.id);
    console.log(myList);
    if (checkList.length === 0) {
      const movieObject = {poster_path: newMovie.poster_path, original_title: newMovie.original_title, id: newMovie.id};
      movieService.addMovie(movieObject)
      .then( response => {
        setMyList(myList.concat(response));
      })
      .catch(error => 
        console.log(error)
      )
    }
    else {
      alert("Already in List");
    }
  }

  return (
   <div className="App">
      <Taskbar/>
      <h1>My List</h1>
      {myList.length === 0 ? <p></p> : <MovieList movies={myList} addMovie={handleAddList} hideButton={true}/>}
      <h1>Movies</h1>
      {!isLoading && <MovieList movies={movies} addMovie={handleAddList}/>}
      <h1>Movies</h1>
      <MovieList movies={testOne} addMovie={handleAddList}/>
      <h1>Movies</h1>
      <MovieList movies={testTwo} addMovie={handleAddList}/>
    </div> 
  );
}

export default App;
