import React from 'react';
import Auth from '../components/Auth';

class SignInView extends React.Component {

  render() {
    return (
      <div>
        {/*insert logo/image here  */}
        <h1>Dreamcatcher</h1>
        <Auth id="signIn" />
        <h3>First time here?</h3>
        <a href="client/views/signUpView.js">Sign Up</a>
      </div>
    );
  };
};

  export default SignInView;