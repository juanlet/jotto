import React from 'react';

const TotalGuesses = (props) => {
    return (
        <div className="container" data-test="total-guesses-box">
            <h4>Total Guesses: </h4>
            <div data-test="total-guesses-count">{props.totalGuesses.length}</div>
        </div>
    );
};

export default TotalGuesses;