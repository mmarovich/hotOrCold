
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