import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import movieService from "../Services/movieService";
import { Fragment } from 'react';

const MovieDetailed = () => {
    const [movie, setMovie] = useState(null)
    let {id} = useParams();
    const baseUrl = "https://image.tmdb.org/t/p/w185/";

    useEffect(() => {
        movieService.getMovie(id)
        .then(response => {
            setMovie(response);
            console.log(response);
        })
    }, [])

    return (
        <div>
            {movie && 
            <Fragment>
                <div>
                    <h1>{movie.original_title}</h1>
                    <span>{movie.release_date.slice(0,4)}</span>
                </div>
                <div className="movie-details">
                    <img src={`${baseUrl}${movie.poster_path}`}/>
                    <span>{movie.overview}</span>
                </div>
            </Fragment>
            }
        </div>
    );
}

export default MovieDetailed;