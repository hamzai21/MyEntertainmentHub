import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3/movie/popular?page=1&api_key=2a422df11485ab6d54f06c0c296c9dc8";

const getAll = () => {
    const request = axios.get(baseUrl);
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

export default {getAll, getPoster};