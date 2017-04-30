import React, { Component } from 'react';
import './startGame.css';
import { connect } from 'react-redux';

import store from '../store';
import * as actions from '../actions/index';


class StartGame extends Component {
    constructor(props) {
        super(props);

        this.begin = this.begin.bind(this);
    }

    begin(e) {
        store.dispatch(actions.startGame());
    }

    render() {
        return(
            <button onClick={this.begin}>It's The Start Button!</button>
        )
    }
}

const mapStateToProps = (state, props) => (
    {
    numberGoal: state.numberGoal
    // guess: state.playerGuess
})

export default connect(mapStateToProps)(StartGame);