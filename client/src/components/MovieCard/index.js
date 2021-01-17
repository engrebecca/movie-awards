import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import "./style.css";

const MovieCard = (props) => {
    return (
        <div>
            <Card>
                <img width="20%" src={props.movie.Poster} alt="Movie poster" className="image" />
                <CardBody>
                    <CardTitle tag="h5">{props.movie.Title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.movie.Year}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.movie.Genre}</CardSubtitle>
                </CardBody>

            </Card>
        </div>
    );
};

export default MovieCard;