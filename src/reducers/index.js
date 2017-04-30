import * as actions from '../actions/index';

let guessCounter = 1;

const initialRepositoryState = {
    numberGoal: null,
    playerGuess: null,
    guessTimes: guessCounter
}

export const repositoryReducer = (state=initialRepositoryState, action) => {
    if (action.type === actions.START_GAME) {
        return {
            ...state,
            numberGoal: Math.floor(Math.random()*(100-1+1)+1)
        }
    }
    else if (action.type === actions.NEW_GAME) {
        return {
            ...state,
            numberGoal: Math.floor(Math.random()*(100-1+1)+1)
        }
    }
    else if (action.type === actions.NUMBER_GUESS) {
        return {
            ...state,
            playerGuess: parseInt(action.guess),
            guessTimes: guessCounter++
        }
    }
    return state;
}