import e from 'cors';
import React from 'react';
import plusSign from '../assets.plussign.jpeg';

const NewCard = (props) => {
  //does this need to be bound and if so then should be a class component w/ constructor function?
  handleClick(e) => {
    //prevent page from refreshing
    e.preventDefault();
    //redirect to or render newCardView

  }

  return (
    <div>
      <button onClick={handleClick}> 
      <img src={"plusSign"} alt="create new" ></img>
      <h3>Create New Dream</h3>
      </button>   
    </div>
  );
};

export default NewCard;