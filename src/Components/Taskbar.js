import '../App.css';

const Taskbar = () => {
    return (
        <div>
            <ul className="taskbar">
                <li><a>Home</a></li>
                <li><a>Movies</a></li>
                <li><a>Shows</a></li>
                <li><a>Anime</a></li>
                <li><a>Music</a></li>
                {/* <span id="center-child">The Entertainment Hub</span> */}
                {/* <li id="last-child"><a>Search</a></li> */}
                <li id="last-child"><input placeholder="search"/></li>
            </ul>
        </div>
    )
}

export default Taskbar;