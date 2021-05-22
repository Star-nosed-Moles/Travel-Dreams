import React {Component} from 'react';


class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    handleClick = async (e) => {
        //prevents app from refreshing every time you click button
        e.preventDefault();
        
    }
    render(){
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
                onChange={(e) => setUserpassword(e.target.value)}
              />
          </p>
          <button type="button"
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