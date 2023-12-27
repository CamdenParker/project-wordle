import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import SubmissionBar from '../SubmissionBar';
import GuessTracker from '../GuessTracker';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [input, setInput] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(input) {

    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      alert('You ran out of guesses!');
      return;
    } else if (input.length !== 5) {
      alert('Please enter a 5 letter word');
      return;
    } else if (Object.values(guesses).includes(input)) {
      alert('You already guessed that!');
      return;
    }
    console.log({ 'GUESS': input });
    const newGuesses = [...guesses];
    newGuesses.push(input);
    setGuesses(newGuesses);
    setInput('');
  }
  return (
    <>
      <GuessTracker
        guesses={guesses}
        numGuessesAllowed={NUM_OF_GUESSES_ALLOWED}
        answer={answer}
      />
      {guesses[guesses.length - 1] === answer
        ? (<div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses.length} guesses</strong>.
          </p>
        </div>)
        : guesses.length === NUM_OF_GUESSES_ALLOWED
          ? (<div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          </div>)
          : null
      }
      <SubmissionBar
        input={input}
        setInput={setInput}
        handleGuess={handleGuess}
      />
    </>
  );
}

export default Game;
