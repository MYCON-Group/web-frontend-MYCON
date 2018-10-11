import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <React.Fragment>
            <h3> Sorry, you were not meant to see this page! please click <Link to="/">here</Link> to head back home</h3>
        </React.Fragment>
    )
}

export default ErrorPage