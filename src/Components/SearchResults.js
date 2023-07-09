import movieService from '../Services/movieService';
import SearchQuery from './SearchQuery';
import { useState, useEffect } from 'react';

const SearchResults = ({searchTerm}) => {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        console.log(searchTerm)
        movieService
        .searchQuery(searchTerm)
        .then(response => {
            setSearchResults(response.results);
            console.log("test ", searchResults);
        })
        .then(response =>{ 
            setIsLoading(false);
        })
    }, [searchTerm]) 

    return(
        <div className="search-results">
            {!isLoading && searchResults.slice(0,7).map(movie =>  
                <SearchQuery
                key={movie.id} 
                movie={movie}/>
            )}
        </div>
    )
}

export default SearchResults;