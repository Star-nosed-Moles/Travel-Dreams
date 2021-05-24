import React from 'react';

class SignUpView extends React.Component {
  constructor (props){
    super(props);
  }

  render() {
    return (
      <div>
        {/*insert logo/image here  */}
        <h1>Dreamcatcher</h1>
        <Auth type="signUp" />
        <h3>First time here?</h3>
        {/* check if link directs properly, check path */}
        <a href="client/views/signUpView.js">Sign Up</a>
      </div>
    );
  };
};

export default SignUpView;