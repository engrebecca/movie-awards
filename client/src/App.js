import { useState, useEffect } from "react";
import Jumbotron from "./components/Jumbotron";
import Searchbar from "./components/Searchbar";
import MovieCard from "./components/MovieCard";
import './App.css';

function App() {
  const [search, setSearch] = useState("");

  // Function to track input change in searchbar
  const handleInputChange = e => {
    setSearch(e.target.value);
    console.log(search)
  };

  return (

    <div className="App">
      <Jumbotron />
      <Searchbar inputChange={handleInputChange} search={search} />
      <MovieCard />
    </div>
  );
}

export default App;
