import React from 'react';
// import { render } from 'sass';
import '../stylesheets/style.scss';

import SignInView from '../views/signInView';
import SignUpView from '../views/signUpView';
import HomePageView from '../views/HomePageView';
import PostView from '../views/PostView';
import MapContainer from './MapContainer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: 'signin',
      currPostID: '60ab08d230ec251718bcd75e',
      userID:'',
      userName:''
    };

    this.changeView = this.changeView.bind(this);
    this.setUser = this.setUser.bind(this);

    // views object contains views
    // changeView is passed down to let child components change the View
    this.views = {
      'signup': <SignUpView changeView={this.changeView} setUserFunc={this.setUser} view="signup"/>,
      'signin': <SignInView changeView={this.changeView} setUserFunc={this.setUser} view="signin"/>,
      'homepage': <HomePageView view="homepage"/>,
      'post': <PostView currPost={this.state.currPostID} view="post"/>
    };
  }

  // function that changes state.current to a value passed into it
  // pass that function as props to children
  changeView = function (value) {
    this.setState({ current: value });
  }

  // function that changes state.userID and state.username for reference in other components
  setUser = function (userID, userName) {
    // set userID and userName state
    this.setState({ userID: userID, userName: userName });
  }

  render() {
    return (
      <div>
        {this.views[this.state.current]}
      </div>
    )
  }
}

export default App;