import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./style.css";
import API from "../../utils/API";

const MovieCard = (props) => {
    async function nominateMovie(movieTitle, movieGenre, movieYear, moviePoster) {
        let movieNomination = {
            title: movieTitle,
            year: movieYear,
            genre: movieGenre,
            poster: moviePoster
        }
        let response = await API.nominate(movieNomination)
        console.log(response);
    }
    return (
        < div >
            <Card>
                <img width="20%" src={props.movie.Poster} alt="Movie poster" className="image" />
                <CardBody>
                    <CardTitle tag="h5">{props.movie.Title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.movie.Year}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.movie.Genre}</CardSubtitle>
                    <Button color="secondary" onClick={() => nominateMovie(props.movie.Title, props.movie.Year, props.movie.Genre, props.movie.Poster)}>Nominate</Button>
                </CardBody>
            </Card>
        </div >
    );
};

export default MovieCard;