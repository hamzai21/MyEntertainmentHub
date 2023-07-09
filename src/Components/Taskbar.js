import SearchResults from '../Components/SearchResults';
import { useState } from 'react';

const Taskbar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <ul className="taskbar">
                <li><a>Home</a></li>
                <li><a>Movies</a></li>
                <li><a>Shows</a></li>
                <li><a>Anime</a></li>
                <li><a>Music</a></li>
                {/* <span id="center-child">The Entertainment Hub</span> */}
                <li id="last-child"><input value={searchTerm} placeholder="search" onChange={handleSearchChange}/><SearchResults searchTerm={searchTerm}/></li>
            </ul>
        </div>
    )
}

export default Taskbar;