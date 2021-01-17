import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./style.css";
import API from "../../utils/API";

const MovieCard = (props) => {
    return (
        < div >
            <Card className="border-0">
                <img width="20%" src={props.movie.poster} alt="Movie poster" className="image" />
                <CardBody>
                    <CardTitle tag="h5">{props.movie.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.movie.year}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.movie.genre}</CardSubtitle>
                    <Button color="secondary">Remove</Button>
                </CardBody>
            </Card>
        </div >
    );
};

export default MovieCard;