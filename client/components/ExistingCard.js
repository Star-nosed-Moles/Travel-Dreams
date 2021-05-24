import React from 'react';
//import images/assets folder?


const ExistingCard = (props) => {
    //onclick -> whole card redirects to page for that location

  handleClick(e) => {
    //prevent page from refreshing
    e.preventDefault();
    //redirect to or render the view/page for the location with this key

  }

  return (
    <div>
      <button onClick={handleClick}> 
      {/* image would ideally be the image uploaded when card was created {this.props.img} */}
      <img src="../assets/SMpier" ></img>
      <h3>{this.props.loc}</h3>
      </button>   
    </div>
  )
}

export default ExistingCard;
