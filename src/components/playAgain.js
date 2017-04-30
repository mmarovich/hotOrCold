import React, { Component } from 'react';
import './playAgain.css';
import { connect } from 'react-redux';

import * as actions from '../actions/index';
import store from '../store';

class PlayAgain extends Component {
    constructor(props) {
        super(props);

        this.startOver = this.startOver.bind(this);
    }

    startOver(e) {
        e.preventDefault();
        store.dispatch(actions.newGame());
    }

    render() {
        return(
            <button onClick={this.startOver}>Start Over</button>
        )
    }
}

const mapStateToProps = (state, props) => ({
    numberGoal: state.numberGoal
})

export default connect(mapStateToProps)(PlayAgain);