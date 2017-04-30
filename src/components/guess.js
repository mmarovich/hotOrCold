import React, { Component } from 'react';
import './guess.css';
import { connect } from 'react-redux';

import store from '../store';
import * as actions from '../actions/index';

class Guess extends Component {
    constructor(props) {
        super(props);

        this.guess = this.guess.bind(this);
    }

    guess(e) {
        e.preventDefault();
        store.dispatch(actions.numberGuess(this.number.value));
    }

    render() {

        const hotOrCold = () => {
            return <div>{this.props}</div>
        }

        return(
            <div>
                <form onSubmit={this.guess}>
                    Guess:<br />
                    <input type="text" name="guess" ref={ref => this.number = ref} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    {hotOrCold}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => (
    {
    // numberGoal: state.numberGoal,
    guess: state.playerGuess
})

export default connect(mapStateToProps)(Guess);