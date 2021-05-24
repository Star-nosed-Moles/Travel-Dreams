import React from 'react';
//what is this component? duplicate of existingCard or existingCardView?
const Post = (props) => {

  render() {
    return (
      <div>
        <p>
          Post Location
        </p>
        <p>
          Post Title
        </p>
        <div>
          Post Text
          Make me a big ol' Div!
        </div>
      </div>
    );
  };
};

export default Post;