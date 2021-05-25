import React from 'react';

class Post extends React.Component {
  // should be getting props from PostView Component

  render() {
    // do not display component if no props to fill out post
    if (!this.props.post) return null;
    
    const { location, description } = this.props.post;
    return (
      <div>
        <p className="location-text" >
          {location}
        </p>
        <div className="post-text" >
          <p>{ description }</p>
        </div>
      </div>
    );
  };
};

export default Post;