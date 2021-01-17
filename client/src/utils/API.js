import axios from "axios";

const OMDBurl = "http://www.omdbapi.com/?t="
const APIkey = "&apikey=21cffc8d"

export default {
    // Route to search for a movie from OMBD API
    search: function (movieQuery) {
        return axios.get(`${OMDBurl}${movieQuery}${APIkey}`)
    },
    nominate: function (movieData) {
        return axios.post("/nominate", movieData);
    }
};