import React from 'react';
import { range } from '../../utils.js';
import { checkGuess } from '../../game-helpers.js';

function GuessTracker({ guesses, numGuessesAllowed, answer }) {
  return (
    <div className="guess-results">
      <ol>
        {
          range(numGuessesAllowed).map((guessIndex) => {
            let guessObject = checkGuess(guesses[guessIndex], answer);
            return (
              <p
                className='guess'
                key={guessIndex}>{
                  range(5).map((stringIndex) => (
                    < span
                      className={`cell ${guesses[guessIndex]
                        ? guessObject[stringIndex].status
                        : ''}`}
                      key={stringIndex}
                    >
                      {
                        guesses[guessIndex]
                          ? guessObject[stringIndex].letter
                          : ''}
                    </span>
                  ))
                }
              </p>
            );
          })
        }
      </ol>
    </div >
  );
}

export default GuessTracker;
