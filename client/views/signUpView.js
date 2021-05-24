import React from 'react';
import Auth from '../components/Auth';

class SignUpView extends React.Component {
  constructor (props){
    super(props);
  }

  render() {
    console.log('props in sign up', this.props);
    const { changeView } = this.props;

    return (
      <div>
        {/*insert logo/image here  */}
        <h1>Dreamcatcher</h1>
        <Auth type="Sign Up" func={() => console.log('hello')} />
        <h3>First time here?</h3>
        {/* check if link directs properly, check path */}
        <a href="client/views/signUpView.js">Sign Up</a>
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