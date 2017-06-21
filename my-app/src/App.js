import React, { Component } from 'react';
import AboutUs from './components/AboutUs';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <Route path="/aboutus" component={AboutUs} />
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
