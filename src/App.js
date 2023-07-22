import './App.css';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'; 
import Home from '../src/Components/Home'
import Taskbar from './Components/Taskbar/Taskbar';
import MovieDetailed from './Components/MovieDetailed';

function App() {
  return (
  <Router>
    <div className="App">
      <Taskbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movie/:id" element={<MovieDetailed/>}></Route>
        </Routes>
    </div>
  </Router>
  );
}

export default App;
