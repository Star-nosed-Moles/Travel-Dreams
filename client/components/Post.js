import React from 'react';

class Post extends React.Component {
  // should be getting props from PostView Component

  render() {
    if (!this.props.post) return null;
    
    const { location, description } = this.props.post;
    return (
      <div>
        <p className="location-text" >
          {location}
        </p>
        <div className="post-text" >
          <p>{ this.props.post.description }</p>
        </div>
      </div>
    );
  };
};

export default Post;