import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./style.css";
import API from "../../utils/API";

const MovieCard = (props) => {
    // Function to nominate movie and save in database
    async function nominateMovie(movieTitle, movieGenre, movieYear, moviePoster) {
        let movieNomination = {
            title: movieTitle,
            year: movieYear,
            genre: movieGenre,
            poster: moviePoster
        }
        await API.nominate(movieNomination)
        // Reload the nomination section
        props.reload();
        // Clear the search results section
        props.clearSearch(false);
    }

    return (
        < div >
            <Card className="border-0 mt-5">
                <img width="20%" src={props.movie.Poster} alt="Movie poster" className="image" />
                <CardBody>
                    <CardTitle tag="h5">{props.movie.Title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.movie.Year}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.movie.Genre}</CardSubtitle>
                    {/* If the movie title searched is already nominated, disable the nominate button */}
                    {
                        props.validate ?
                            <Button color="secondary" onClick={() => nominateMovie(props.movie.Title, props.movie.Year, props.movie.Genre, props.movie.Poster)}>Nominate</Button> :
                            <Button disabled color="secondary" onClick={() => nominateMovie(props.movie.Title, props.movie.Year, props.movie.Genre, props.movie.Poster)}>Nominate</Button>
                    }

                </CardBody>
            </Card>
        </div >
    );
};

export default MovieCard;