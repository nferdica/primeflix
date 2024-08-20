import axios from "axios";

// BASE URL: https://api.themoviedb.org/3/
// API URL: movie/now_playing?api_key=ca38a0df1e260ab351f0bb8e4802412c

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;