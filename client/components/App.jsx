import React from 'react';
// import { render } from 'sass';
// import './stylesheets/styles.scss';

import SignInView from '../views/SignInView';
import SignUpView from '../views/SignUpView';
import HomePageView from '../views/HomePageView';
import PostView from '../views/PostView';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: 'signup'
    };
    this.object = {
      'signup': <SignUpView />,
      'signin': <SignInView />,
      'homePage': <HomePageView />,
      'post': <PostView />
    }
  }

  render() {
    return (
      <div>
        App
        {this.object[this.state.current]}
      </div>
    )
  }
}

export default App;