
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
    
    
    render(){
        //generate array of existing cards using props/state
        let existingCards = [];
        //loop through existing locations in the props/state
          //generate an existing card for each one
        let locations = this.state.locations; //how to get the input from the createNew view inputs into this props/state?
        
        locations.map((loc, i) => {
          existingCards.push(<ExistingCard key={i} loc={locations[i][location]}/>);
        })
        return(
            <div className="cardsContainer">
              <NewCard />
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