import React, { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      signedUp: false;
      count: 0,	
    };
  }
  handleClick = () => {
    const signUpStyle = {
      fontSize: '3em',
      color: 'red', 	
    };
	
    if (this.state.signedUp === false) {

    this.setState({ signedUp: true });
    this.setState({ count: count++ });
  }
  handleSignUp = () => {
    
  }
      return (
        <div> Sign up! </div>
      );
    }
  }	
  render() {
  
    return (
      <div>
	<button onClick={}>Button</button>
      </div>
    );
  }
}
export default SignUp;
