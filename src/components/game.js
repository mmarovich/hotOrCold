import React, { Component } from 'react';
import './game.css';
// import { connect } from 'react-redux';

import StartGame from './startGame';
import Guess from './guess';
import PlayAgain from './playAgain';

class Game extends Component {
    render() {
        return(
            <div>
                <p>The Game is A-go</p>
                <StartGame />
                <Guess />
                <PlayAgain />
            </div>
        )
    }
}

// const mapStateToProps = (state, props) => ({
//     numberGoal: state.numberGoal,
//     playerGuess: state.playerGuess
// })

export default Game;