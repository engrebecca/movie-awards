import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./style.css";
import API from "../../utils/API";

const MovieCard = (props) => {
    // Function to remove movie from nomination list
    async function removeNomination(id) {
        await API.remove(id);
        // Reload the nomination section
        props.reload();
    }
    return (
        < div >
            <Card className="border-0 mt-5">
                <img width="20%" src={props.movie.poster} alt="Movie poster" className="image" />
                <CardBody>
                    <CardTitle tag="h5">{props.movie.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.movie.year}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.movie.genre}</CardSubtitle>
                    <Button color="secondary" onClick={() => removeNomination(props.movie._id)} >Remove</Button>
                </CardBody>
            </Card>
        </div >
    );
};

export default MovieCard;