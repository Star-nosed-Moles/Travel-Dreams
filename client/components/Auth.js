import React {Component} from 'react';


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
        //if Auth type = signIn
        if (this.props.type = signIn){
           //if name exists in db 
            //if name/pw set match name/pw set from database => homepage view
            //if name/pw set DON'T match name/pw set from database =>  'wrong pw' msg or alert
          //if name DOESN'T exist in db => 'no such account' msg or alert 
        }
            
        //if Auth type = signUp
          if (this.props.type = signUp){
            //add name/pw set to db
          }
          
    }
    
    setUsername(input){
        setState({username:input})
    }

    setUserPassword(input){
        setState({password:input})
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
                onChange={(e) => setUserpassword(e.target.value)}
              />
          </p>
          <button
            onClick={handleClick}
            >
              Submit
          </button>
        </div>
    )};
}




export default auth;

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