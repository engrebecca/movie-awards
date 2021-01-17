import { useState, useEffect } from "react";
import Jumbotron from "./components/Jumbotron";
import Searchbar from "./components/Searchbar";
import MovieCard from "./components/MovieCard";
import './App.css';
import API from "./utils/API";

function App() {
  const [search, setSearch] = useState("");
  const [movieResults, setMovieResults] = useState({});

  // Function to track input change in searchbar
  const handleInputChange = e => {
    setSearch(e.target.value);
    console.log(search)
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!search) {
      return;
    }
    // If there is a movie input, search through the OMBD API
    API.search(search)
      .then(res => {
        setMovieResults(res.data);
        console.log(res.data);
      })
  };

  return (

    <div className="App">
      <Jumbotron />
      <Searchbar inputChange={handleInputChange} search={search} formSubmit={handleFormSubmit} />
      <MovieCard />
    </div>
  );
}

export default App;
