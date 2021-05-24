import React from 'react';
// import { render } from 'sass';
import '../stylesheets/style.scss';

import SignInView from '../views/signInView';
import SignUpView from '../views/signUpView';
import HomePageView from '../views/HomePageView';
import PostView from '../views/PostView';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: 'signin',
      currPostID: '60ab08d230ec251718bcd75e',
    };

    this.changeView = this.changeView.bind(this);

    this.views = {
      'signup': <SignUpView changeView={this.changeView} />,
      'signin': <SignInView changeView={this.changeView} />,
      'homePage': <HomePageView />,
      'post': <PostView currPost={this.state.currPostID} />
    };
  }

  // function that changes state.current to a value passed into it
  // pass that function as props to children
  changeView = function (value) {
    this.setState({ current: value });
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