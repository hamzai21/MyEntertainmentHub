import '../App.css';

const Taskbar = () => {
    return (
        <div>
            <ul className="taskbar">
                <li><a>Home</a></li>
                <li><a>Movies</a></li>
                <li><a>Shows</a></li>
                <li id="last-child"><a>Search</a></li>
            </ul>
        </div>
    )
}

export default Taskbar;