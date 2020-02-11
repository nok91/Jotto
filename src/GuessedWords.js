import React from 'react'
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
    let contents;
    if (guessedWords.length === 0) {
        contents = (
            <div data-test="guess-instructions">
                Try to guess the  secret word!
            </div>
        );
    }
    return (
        <div data-test="component-guessed-words">
            { contents }
        </div>
    );
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default GuessedWords;