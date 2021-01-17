import { useState, useEffect } from "react";
import Jumbotron from "./components/Jumbotron";
import Searchbar from "./components/Searchbar";
import MovieCard from "./components/MovieCard";
import './App.css';
import API from "./utils/API";

function App() {
  const [search, setSearch] = useState("");
  const [movieResults, setMovieResults] = useState({});
  const [searchStatus, setSearchStatus] = useState(false);
  const [nominatedMovies, setNominatedMovies] = useState([]);

  useEffect(() => {
    loadNominatedMovies();
  }, [])

  async function loadNominatedMovies() {
    let movies = await API.getMovies();
    setNominatedMovies(movies.data);
  }

  // Function to track input change in searchbar
  const handleInputChange = e => {
    setSearch(e.target.value);
    console.log(search)
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!search) {
      return;
    }
    // If there is a movie input, search through the OMBD API
    let res = await API.search(search)
    // If there is a movie result from OMDB, display set search status to true, otherwise set to false
    if (res.data.Response === "True") {
      setSearchStatus(true);
      setMovieResults(res.data);
      console.log(res.data);
    } else {
      setSearchStatus(false);
    }
    setSearch("");
  };

  return (

    <div className="App">
      <Jumbotron />
      <Searchbar inputChange={handleInputChange} search={search} formSubmit={handleFormSubmit} />
      {/* If the search status is true display the results in a movie card component, otherwise display empty div*/}
      { searchStatus ?
        <MovieCard movie={movieResults} /> :
        <p></p>
      }
    </div>
  );
}

export default App;
