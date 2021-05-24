import React from 'react';
// import { render } from 'sass';
import '../stylesheets/style.scss';

import SignInView from '../views/SignInView.js';
import SignUpView from '../views/SignUpView.js';
import HomePageView from '../views/HomePageView.js';
import PostView from '../views/PostView.js';
import MapContainer from './MapContainer.js';

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
        <div>
        MAP AREA:
        <MapContainer />
        </div>
        App
        {this.views[this.state.current]}
      </div>
    )
  }
}

export default App;