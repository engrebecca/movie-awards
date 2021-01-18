import { useState, useEffect } from "react";
import Jumbotron from "./components/Jumbotron";
import Searchbar from "./components/Searchbar";
import MovieCard from "./components/MovieCard";
import NominationCard from "./components/NominationCard";
import Container from "./components/Container";
import Banner from "./components/Banner";
import { Row, Col } from 'reactstrap';
import './App.css';
import API from "./utils/API";

function App() {
  const [search, setSearch] = useState("");
  const [movieResults, setMovieResults] = useState({});
  const [searchStatus, setSearchStatus] = useState(false);
  const [nominatedMovies, setNominatedMovies] = useState([]);
  let [validateNomination, setValidateNomination] = useState(true);

  useEffect(() => {
    loadNominatedMovies();
  }, [])

  async function loadNominatedMovies() {
    let movies = await API.getMovies();
    setNominatedMovies(movies.data);
    setValidateNomination(true);
  }

  // Function to track input change in searchbar
  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  // Function to submit search for specific movie title
  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!search) {
      return;
    }
    // Reset validation nomination useState to be default true
    setValidateNomination(true);
    // If there is a movie input, search through the OMBD API
    let res = await API.search(search)
    // If there is a movie result from OMDB, display set search status to true, otherwise set to false
    if (res.data.Response === "True") {
      setSearchStatus(true);
      setMovieResults(res.data);
      // Validate if the searched movie already exists in the nominated list so button can be disabled if already nominated
      for (let movie of nominatedMovies) {
        if (movie.title === res.data.Title) {
          setValidateNomination(false);
        }
      }
      // Validate if number of movies nominated, if already 5 disable nomination button
      if (nominatedMovies.length === 5) {
        setValidateNomination(false);
      }
    } else {
      setSearchStatus(false);
    }
    setSearch("");
  };

  return (

    <div className="App">
      <Jumbotron />
      {
        nominatedMovies.length === 5 ?
          <Banner /> :
          <p></p>
      }
      <Searchbar inputChange={handleInputChange} search={search} formSubmit={handleFormSubmit} />
      <Row>
        <Col lg="6">
          <Container>
            <h3 className="mt-5 header">Search Results</h3>
            {/* If the search status is true display the results in a movie card component, otherwise display empty div*/}
            {searchStatus ?
              <MovieCard movie={movieResults} clearSearch={setSearchStatus} reload={loadNominatedMovies} validate={validateNomination} /> :
              <p>No results to display</p>
            }
          </Container>
        </Col>
        <Col lg="6">
          <Container>
            <h3 className="mt-5 header">Nominated Movies</h3>
            {
              !nominatedMovies.length ?
                <p>No movies nomiated yet</p> :
                (<>{
                  nominatedMovies.map(movie => {
                    return (
                      <NominationCard movie={movie} key={movie._id} reload={loadNominatedMovies} />
                    )
                  })
                }</>)
            }
          </Container>
        </Col>
      </Row>
    </div >
  );
}

export default App;
