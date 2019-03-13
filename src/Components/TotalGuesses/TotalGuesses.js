import React from 'react';
import PropTypes from 'prop-types';

const TotalGuesses = (props) => {
    return (
        <div className="container" data-test="total-guesses-box">
            <h4>Total Guesses: </h4>
            <div data-test="total-guesses-count">{props.totalGuesses}</div>
        </div>
    );
};

TotalGuesses.propTypes = {
   totalGuesses: PropTypes.number.isRequired
};

export default TotalGuesses;