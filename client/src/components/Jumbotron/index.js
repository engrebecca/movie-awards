import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./style.css";

const Jumbo = (props) => {
    return (
        <div>
            <Jumbotron fluid id="jumbotron">
                <Container fluid>
                    <h1 className="display-3 text-white">Movie Awards</h1>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbo;