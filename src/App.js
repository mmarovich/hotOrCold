import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import * as actions from './actions/index';

class App extends Component {

  changeState(e) {
    e.preventDefault();
    store.dispatch(actions.startGame())
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <form onSubmit={this.changeState}>
            Guess:<br />
            <input type="text" name="guess" />
            <br />
            <input type="submit" value="Submit" />
          </form> 
        </div>
    );
  }
}

export default App;
