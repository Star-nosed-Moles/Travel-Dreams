import React from 'react';
import Auth from '../components/Auth';

class SignUpView extends React.Component {
  constructor (props){
    super(props);

    this.signUpFunc = this.signUpFunc.bind(this);
  }

// fetch request for password/username as a POST
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// use as template for fetch request
  
  signUpFunc = (userName, userPassword) => {
    console.log('signing up');
    
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: userName, password: userPassword })
    })
      .then(response => response.json())
      .then(response => {
        console.log('response received!', response);
        
        // { _id: 123434234, username: tom, password: codesmith }
        // receives the user profile data (and user ID)
        // send user profile data to App state so we can access it in other components
        this.props.setUserFunc(response._id, response.username);
        // change view to homepage
        this.props.changeView('homepage');
      })
      .catch(err => console.log(err));
  }
  
  render() {
    console.log('props in sign up', this.props);
    const { changeView } = this.props;

    return (
      <div>
        {/*insert logo/image here  */}
        <h1>Dreamcatcher</h1>
        <Auth type="Sign Up" authFunc={this.signUpFunc} />
        <h3>Been here before?</h3>
        {/* check if link directs properly, check path */}
        <a onClick={() => this.props.changeView('signin')}>Sign In</a>
      </div>
    );
  };
};

export default SignUpView;

        //if Auth type = signIn
          //if name exists in db 
           //if name/pw set match name/pw set from database => homepage view
           //if name/pw set DON'T match name/pw set from database =>  'wrong pw' msg or alert
         //if name DOESN'T exist in db => 'no such account' msg or alert 