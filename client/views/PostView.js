import React from 'react';
import MapContainer from '../components/MapContainer';
import Post from '../components/Post';

class PostView extends React.Component {
  // access necessary state to pass in here? on Mount, on render
  
  render() {
    return (
      <div>
        <MapContainer />
        <Post />
      </div>
    );
  };
};

export default PostView;