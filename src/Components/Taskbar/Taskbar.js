import './Taskbar.css';
import SearchResults from '../SearchResults';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Taskbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    }

    const showMenu = event => {
        setToggleMenu(true);
    }

    const hideMenu = event => {
        setToggleMenu(false);
    }

    return (
        <div>
            <ul className="taskbar">
                <li><Link to="/">Home</Link></li>
                <li><a>Movies</a></li>
                <li><a>Shows</a></li>
                <li><a>Anime</a></li>
                <li><a>Music</a></li>
                {/* <span id="center-child">The Entertainment Hub</span> */}
                <li id="last-child">
                    <input type="search" value={searchTerm} placeholder="search" onChange={handleSearchChange} onFocus={showMenu} onBlur={hideMenu}/>
                    <SearchResults searchTerm={searchTerm} toggleMenu={toggleMenu}/>
                </li>
            </ul>
        </div>
    )
}

export default Taskbar;