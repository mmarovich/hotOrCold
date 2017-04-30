import React, { Component } from 'react';
import './guess.css';
import { connect } from 'react-redux';

import store from '../store';
import * as actions from '../actions/index';

class Guess extends Component {
    constructor(props) {
        super(props);

        this.guess = this.guess.bind(this);
        this.hotOrCold = this.hotOrCold.bind(this);
    }

    hotOrCold() {
        if (this.props.guess === this.props.numberGoal) {
            return <div>You Win!</div>
        } else {
            return <div>Guess Again</div>
        }
    }

    guess(e) {
        e.preventDefault();
        store.dispatch(actions.numberGuess(this.number.value));
        
    }

    render() {

        return(
            <div>
                <form onSubmit={this.guess}>
                    Guess:<br />
                    <input type="number" name="guess" ref={ref => this.number = ref} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                {this.props.numberGoal} <br/>
                {this.props.guess} <br/>
                {this.hotOrCold}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => (
    {
    numberGoal: state.numberGoal,
    guess: state.playerGuess
})

export default connect(mapStateToProps)(Guess);