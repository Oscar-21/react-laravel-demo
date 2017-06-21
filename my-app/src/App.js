import React, { Component } from 'react';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import SignUp from './components/SignUp'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/aboutus" component={AboutUs} />
	  <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
