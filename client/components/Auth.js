import React, { Component } from 'react';


class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
        this.handleClick = this.handleClick.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setUserPassword = this.setUserPassword.bind(this);
    }

    handleClick = async (e) => {
        //prevents app from refreshing every time you click button
        e.preventDefault();
        //invoke fcn passed in by props
            
        //if Auth type = signUp
          if (this.props.type = signUp){
            //add name/pw set to db
          }
          
    }
    
    setUsername(input){
        this.setState({username:input})
    }

    setUserPassword(input){
        this.setState({password:input})
    }

    render(){
    return (
        <div>
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
          <button
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