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
        <Auth type="signUp" func={}
        //if Auth type = signIn
          //if name exists in db 
           //if name/pw set match name/pw set from database => homepage view
           //if name/pw set DON'T match name/pw set from database =>  'wrong pw' msg or alert
         //if name DOESN'T exist in db => 'no such account' msg or alert 
          />
        <h3>First time here?</h3>
        {/* check if link directs properly, check path */}
        <a href="client/views/signUpView.js">Sign Up</a>
      </div>
    );
  };
};

export default SignUpView;