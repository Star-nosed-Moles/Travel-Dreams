
import React from 'react';
import ExistingCard from './ExistingCard.js';
import NewCard from './newCard.js';


class CardsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //how will we populate this w/existing location objects from db?
      locations:[]
    };
  }
    
    
  render() {
    const cardStyle = {
      height: '100px',
      width: '100px'
    }  

        //generate array of existing cards using props/state
        let existingCards = [];
        //loop through existing locations in the props/state
          //generate an existing card for each one
        let locations = this.state.locations; //how to get the input from the createNew view inputs into this props/state?213
        
        locations.map((loc, i) => {
          existingCards.push(<ExistingCard key={i} loc={locations[i][location]} style={cardStyle} />);
        })
        return(
            <div className="cardsContainer">
              <NewCard style={cardStyle} />
              {existingCards}
            </div>
        )
    }
}

export default CardsContainer;


/*
locations:[
  {
    location:'',
    description:'',
    image:'filepath.jpg'
  },
  {
    location:'',
    description:'',
    image:'filepath.jpg'
  }
]
*/