import React, { Component } from 'react';


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  };

  handleClick(e) {
    //prevents app from refreshing every time you click button
    e.preventDefault();
    console.log('handling click');
  };

  setUsername(value) {
    this.setState({ username: value });
  };

  setUserPassword(value) {
    this.setState({ password: value });
  };

  render() {
  return (
    <div className="text-entry" >
      <p>
        Username:
        <input 
          onChange={(e) => setUsername(e.target.value)}
        />
      </p>
          <p>
              Password:
              <input 
                onChange={(e) => setUserPassword(e.target.value)}
              />
          </p>
          <button type="button"
            onClick={this.handleClick}
            >
              Submit
          </button>
        </div>
    )};
}




export default Auth;

/* 
username event object
{target:{
    value:{
        username:''
    }
  } 

password event object:
{target:{
    value:{
        password:''
    }
 }
*/