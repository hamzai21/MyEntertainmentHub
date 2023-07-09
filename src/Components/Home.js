import Taskbar from '../Components/Taskbar';
import MovieList from '../Components/MovieList';

const Home = ({handleAddList, myList, movies, testOne, testTwo, isLoading}) => {
    <div className="App">
      <Taskbar/>
      <h1>My List</h1>
      {myList.length === 0 ? <p></p> : <MovieList movies={myList} handleAddList={handleAddList} hideButton={true}/>}
      <h1>Movies</h1>
      {!isLoading && <MovieList movies={movies} addMovie={handleAddList}/>}
      <h1>Movies</h1>
      <MovieList movies={testOne} addMovie={handleAddList}/>
      <h1>Movies</h1>
      <MovieList movies={testTwo} addMovie={handleAddList}/>
    </div>
}

export default Home;