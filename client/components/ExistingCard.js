import React from 'react';
//import images/assets folder?
import SMpier from '../assets/SMpier.jpeg';

const ExistingCard = (props) => {
    //onclick -> whole card redirects to page for that location

  const handleClick = (e) => {
    //prevent page from refreshing
    e.preventDefault();
    //redirect to or render the view/page for the location with this key

  }

  return (
    // if not rendering try onClick in div instead of button
    <div>
      <button onClick={handleClick}> 
      {/* image would ideally be the image uploaded when card was created {this.props.img} */}
        <img src={SMpier} ></img>
      <h3>{this.props.loc}</h3>
      </button>   
    </div>
  )
}

export default ExistingCard;
