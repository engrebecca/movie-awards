import React from 'react';
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import "./style.css";

const MovieCard = (props) => {
    return (
        <div>
            <Card>
                <img width="20%" src="https://www.limitedruns.com/media/cache/7e/6b/7e6b6743a7e45d096838abd67b2464e2.jpg" alt="Card image cap" className="image" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Year</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Genre</CardSubtitle>
                </CardBody>

            </Card>
        </div>
    );
};

export default MovieCard;