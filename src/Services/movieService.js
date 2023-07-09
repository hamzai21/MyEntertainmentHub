import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3/movie/popular?api_key=2a422df11485ab6d54f06c0c296c9dc8";

const getAll = () => {
    const request = axios.get(`${baseUrl}&page=1&page2`);
    return request.then(response => {
        return response.data;
    })
}

const getPage = number => {
    const request = axios.get(`${baseUrl}&page=${number}`);
    return request.then(response => {
        return response.data;
    })
}

const getPoster = () => {
    const request = axios.get("https://api.themoviedb.org/3/movie/385687/images?api_key=2a422df11485ab6d54f06c0c296c9dc8");
    return request.then(response => {
        return response.data;
    })
}

const addMovie = movie => {
    const request = axios.post("http://localhost:3001/api/movies/", movie);
    return request.then(response => response.data);
}

const searchQuery = query => {
    const request = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2a422df11485ab6d54f06c0c296c9dc8&query="${query}"`);
    return request.then(response => response.data);
}

export default {getAll, getPage, getPoster, addMovie, searchQuery};