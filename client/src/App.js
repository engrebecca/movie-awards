import Jumbotron from "./components/Jumbotron";
import Searchbar from "./components/Searchbar";
import MovieCard from "./components/MovieCard";
import './App.css';

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Searchbar />
      <MovieCard />
    </div>
  );
}

export default App;
