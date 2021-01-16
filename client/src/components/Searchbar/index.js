import React from 'react';
import { FormGroup, Button, Input, Container, Form, Label } from 'reactstrap';

const Searchbar = (props) => {
    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for="movieTitle">Enter a movie title to select it for the Movie Awards nomination.</Label>
                    <Input value={props.search} onChange={props.inputChange} type="text" name="movieTitle" id="movieTitle" placeholder="Movie Title" />
                </FormGroup>
                <Button onClick={props.submit} type="submit">Search</Button>
            </Form>
        </Container>
    );
};

export default Searchbar;