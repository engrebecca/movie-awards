import React from 'react';
import { Alert } from 'reactstrap';

const Banner = (props) => {
    return (
        <div>
            <Alert color="success">
                You're done! Thanks for nominating 5 movies.
            </Alert>
        </div>
    );
};

export default Banner;