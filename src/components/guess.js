import React, { Component } from 'react';
import './guess.css';
import { connect } from 'react-redux';
// import thunk from 'redux-thunk';

import store from '../store';
import * as actions from '../actions/index';


class Guess extends Component {
    constructor(props) {
        super(props);

        this.guess = this.guess.bind(this);
        this.hotOrCold = this.hotOrCold.bind(this);
        this.fetchFewestGuesses = this.fetchFewestGuesses.bind(this);
        this.postFewestGuesses = this.postFewestGuesses.bind(this);
    }

    fetchFewestGuesses() {
        const url='http://localhost:8080/fewest-guesses';
        return fetch(url).then(response => {
            if (!response.ok) {
                const error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(response => response.json())
        .then(data => store.dispatch(actions.fetchFewestGuessesSuccess(data.fewestGuesses))
        )
        .catch(error => store.dispatch(actions.fetchFewestGuessesError(error)))
    }

    postFewestGuesses() {
        console.log(this.props.guessTimes);
        let data={
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fewestGuesses: this.props.guessTimes
            })
        }
        const url='http://localhost:8080/fewest-guesses';
        return fetch(url, data).then(response => {
            console.log(response);
            if (!response.ok) {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    hotOrCold() {
        if (!this.props.numberGoal) {
            return <div>Please Start Game</div>
        }
        if (!this.props.guess) {
            return <div>Take A Guess</div>;
        }
        if (this.props.guess > this.props.numberGoal + 20 || this.props.guess < this.props.numberGoal - 20) {
            return <div>Cold As Ice</div>
        }
        if (this.props.guess > this.props.numberGoal + 10 && this.props.guess < this.props.numberGoal + 20) {
            return <div>Warm-ish</div>
        }
        if (this.props.guess < this.props.numberGoal - 10 && this.props.guess > this.props.numberGoal - 20) {
            return <div>Warm-ish</div>
        }
        if (this.props.guess > this.props.numberGoal + 5 && this.props.guess < this.props.numberGoal + 10) {
            return <div>HOT</div>
        }
        if (this.props.guess < this.props.numberGoal - 5 && this.props.guess > this.props.numberGoal - 10) {
            return <div>HOT</div>
        }
        if (this.props.guess < this.props.numberGoal + 5 && this.props.guess > this.props.numberGoal - 5 && this.props.guess !== this.props.numberGoal) {
            return <div>HOTTEST!!!!!</div>
        }
        if (this.props.guess === this.props.numberGoal) {
            this.fetchFewestGuesses().then(() => {
                if (this.props.fewestGuesses < this.props.guessTimes) {
                    return <div>You Win!</div>
                } if (this.props.fewestGuesses > this.props.guessTimes) {
                    this.postFewestGuesses().then(() => {
                        return <div>You beat the last record of {this.props.fewestGuesses} guesses! You beat it in {this.props.guessTimes} guess!</div>
                    })
                }
            })
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
                {this.hotOrCold()}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => (
    {
    numberGoal: state.numberGoal,
    guess: state.playerGuess,
    guessTimes: state.guessTimes,
    fewestGuesses: state.fewestGuesses
})

export default connect(mapStateToProps)(Guess);