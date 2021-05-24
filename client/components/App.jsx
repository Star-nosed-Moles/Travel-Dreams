import React from 'react';
// import { render } from 'sass';
import '../stylesheets/style.scss';

import SignInView from '../views/SignInView';
import SignUpView from '../views/SignUpView';
import HomePageView from '../views/HomePageView';
import PostView from '../views/PostView';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: 'post',
      currPostID: '60ab08d230ec251718bcd75e',
    };
    this.views = {
      'signup': <SignUpView />,
      'signin': <SignInView />,
      'homePage': <HomePageView />,
      'post': <PostView currPost={this.state.currPostID} />
    }
  }

  render() {
    return (
      <div>
        App
        {this.views[this.state.current]}
      </div>
    )
  }
}

export default App;