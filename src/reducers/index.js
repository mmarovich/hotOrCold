import * as actions from '../actions/index';

const initialRepositoryState = {
    numberGoal: null,
    playerGuess: null,
    guessTimes: 0,
    fewestGuesses: 0
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
            guessTimes: state.guessTimes + 1
        }
    } else if (action.type === actions.FETCH_FEWESTGUESSES_SUCCESS) {
        return {
            ...state,
            fewestGuesses: action.fewestGuesses
        }
    } else if (action.type === actions.FETCH_FEWESTGUESSES_ERROR) {
        return {
            ...state
        }
    }
    return state;
}