import movieService from '../Services/movieService';
import SearchQuery from './SearchQuery';
import { useState, useEffect } from 'react';

const SearchResults = ({searchTerm, toggleMenu}) => {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        movieService
        .searchQuery(searchTerm)
        .catch(error => {
            console.log(`No movies found from term ${searchTerm}`);
        })
        .then(response => {
            setSearchResults(response.results);
        })
        .then(response =>{ 
            setIsLoading(false);
        })
    }, [searchTerm, toggleMenu]) 

    return(
        <div className="search-results">
            {toggleMenu && !isLoading && searchResults.slice(0,7).map(movie =>  
            <SearchQuery
            key={movie.id} 
            movie={movie}
            />
            )}
        </div>
    )
}

export default SearchResults;