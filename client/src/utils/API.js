import axios from "axios";

const OMDBurl = "http://www.omdbapi.com/?t="
const APIkey = "&apikey=21cffc8d"

export default {
    // Search for a movie from OMBD API
    search: function (movieQuery) {
        return axios.get(`${OMDBurl}${movieQuery}${APIkey}`)
    },
    // Get all nominated movies from the database
    getMovies: function () {
        return axios.get("/movies");
    },
    // Nominate and add a movie to the database
    nominate: function (movieData) {
        return axios.post("/nominate", movieData);
    }
};