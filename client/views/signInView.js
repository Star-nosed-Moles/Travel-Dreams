import React from 'react';
import Auth from '../components/Auth';

class SignInView extends React.Component {
  constructor (props){
    super(props);
    this.signInFunc = this.signInFunc.bind(this);
  }
  

  signInFunc = (userName, userPassword) => {
    console.log('signing in');

    fetch(`http://localhost:3000/user/?username=${userName}`)
      .then(response => response.json())
      .then(response => {
        console.log('response received!', response);
        const { user } = response;
        //   "user": {
        //     "_id": "60ab06828b9b1d05400a2e89",
        //     "username": "Tom",
        //     "password": "codesmith",
        //     "__v": 0
        // }
        if (userPassword === user.password) {
          // if password matches, setUser & changeView to Homepag
          this.props.setUserFunc(user._id, user.username);
          this.props.changeView('homepage');
        } else {
          // if password doesn't match, changeView to signup
          this.props.changeView('signup');
        }
      }
      )
      .catch(err => console.log(err));
  }

  render() {
    console.log('props', this.props);
    
    return (
      <div>
        {/*insert logo/image here  */}
        <h1>Dreamcatcher</h1>
        <Auth type="Sign In" authFunc={this.signInFunc}
        //if Auth type = signIn
          //if name exists in db 
           //if name/pw set match name/pw set from database => homepage view
           //if name/pw set DON'T match name/pw set from database =>  'wrong pw' msg or alert
         //if name DOESN'T exist in db => 'no such account' msg or alert 
       
        />
        <h3>First time here?</h3>
        {/* direct to sign up view 
        put the func you want called when you click as an anon func so it's not invoked immediately
        */}
        <a onClick={() => this.props.changeView('signup')}> Sign Up  </a>
      </div>
    );
  };
};

  export default SignInView;
