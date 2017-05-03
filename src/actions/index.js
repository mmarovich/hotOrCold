
// Player starts a game and number is randomly generated

export const START_GAME = 'START_GAME';
export const startGame = game => ({
    type: START_GAME,
    game
});

// Player guesses a number

export const NUMBER_GUESS = 'NUMBER_GUESS';
export const numberGuess = (guess, guessTimes) => ({
    type: NUMBER_GUESS,
    guess,
    guessTimes
});

// Player starts a new game.

export const NEW_GAME = "NEW_GAME";
export const newGame = newGame => ({
    type: NEW_GAME,
    newGame
});

export const FETCH_FEWESTGUESSES_SUCCESS = 'FETCH_FEWESTGUESSES_SUCCESS';
export const fetchFewestGuessesSuccess = (fewestGuesses) => ({
    type: FETCH_FEWESTGUESSES_SUCCESS,
    fewestGuesses
});

export const FETCH_FEWESTGUESSES_ERROR= 'FETCH_FEWESTGUESSES_ERROR';
export const fetchFewestGuessesError = (fewestGuesses, error) => ({
    type: FETCH_FEWESTGUESSES_ERROR,
    fewestGuesses,
    error
});