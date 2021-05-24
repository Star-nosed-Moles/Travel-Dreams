import React from 'react';
import MapContainer from '../components/MapContainer';
import Post from '../components/Post';

class PostView extends React.Component {
  // access necessary state to pass in here? on Mount, on render
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }

  fetchPost = function (postID) {
    fetch(`http://localhost:3000/post/${postID}`)
      .then(data => data.json())
      .then(data => {
        console.log('data received from server', data);
        this.setState({ post: data.thisPost });
        return data;
      })
      .catch(err => {
        console.log('error in fetchPost', err);
        // more comprehensive error handling?
        // kick back to home page?
      });
  }

  componentDidMount() {
    // TO-DO: add in proper ID variable
    const { postID } = this.props;
    console.log(postID);
    this.fetchPost('60ab08d230ec251718bcd75e');
  }

  render() {
    return (
      <div>
        {/* <MapContainer /> */}
        <Post post={this.state.post} />
      </div>
    );
  };
};

export default PostView;