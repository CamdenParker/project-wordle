import React from 'react';

function SubmissionBar({ input, setInput, handleGuess }) {
  return (
    <form className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(input.toUpperCase());
      }
      }
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={event => setInput(event.target.value)}
      />
    </form>
  );
}

export default SubmissionBar;
