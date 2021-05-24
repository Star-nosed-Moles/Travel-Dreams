import React from 'react';
import Auth from '../components/Auth';

class SignInView extends React.Component {
  constructor (props){
    super(props);

  }
  render() {
    console.log('props', this.props);
    
    return (
      <div>
        {/*insert logo/image here  */}
        <h1>Dreamcatcher || Sign In </h1>
        <Auth type="Sign In" func={() => console.log('hi')}
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
