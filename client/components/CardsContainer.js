
import React from 'react';
import ExistingCard from './ExistingCard.js';
import NewCard from './newCard.js';


class CardsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
    };
  }
  
  //fetch request to get all existing posts for this user
  //**how do you find the path for the fetch request? this looks different than what we had before
  getUserPosts = (userName) => {
    console.log('getting user posts');

    fetch(`http://localhost:3000/post/?username=${userName}`)
    .then(response => response.json())
    .then(response => {
      console.log('getUserPosts response', response);
      this.setState({ posts: response })
    })
    .catch(err => console.log(err));
  }

    
  render() {
    // if posts haven't been fetched yet, render return null
    // refer to Post.js line 7

    const cardStyle = {
      height: '100px',
      width: '100px'
    }  

    //generate array of existing cards using props/state
    let existingCards = [];
    //loop through existing locations in the props/state
      //generate an existing card for each one
    let allPosts = this.state.posts; //how to get the input from the createNew view inputs into this props/state?
    let locations = this.state.locations; //how to get the input from the createNew view inputs into this props/state?213
    
    allPosts.map((loc, i) => {
      existingCards.push(<ExistingCard key={i} loc={allPosts[i][location]} style={cardStyle} />);
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
they've since added userID, lat and lng to the post schema

{
    "posts": [
        {
            "_id": "60ab055d83cb962060ba78ce",
            "username": "Tom",
            "location": "sapporo",
            "description": "a snowy city I want to visit again :)",
            "date_created": "2021-05-23T07:00:00.000Z",
            "visited": true,
            "__v": 0
        },
        {
            "_id": "60ab06ab8b9b1d05400a2e8a",
            "username": "Tom",
            "location": "sapporo",
            "description": "a snowy city I want to visit again :)",
            "date_created": "2021-05-23T07:00:00.000Z",
            "visited": true,
            "__v": 0
        },
        {
            "_id": "60ab08361b163304cccb738a",
            "username": "Tom",
            "location": "osaka",
            "description": "humor capitol of japan",
            "date_created": "2021-05-23T07:00:00.000Z",
            "visited": true,
            "__v": 0
        },
        {
            "_id": "60ab08d230ec251718bcd75e",
            "username": "Tom",
            "location": "hiroshima",
            "description": "world heritage site of atomic bomb explosion, it sucked, but the city has bangin' okonomiyaki",
            "date_created": "2021-05-23T07:00:00.000Z",
            "visited": true,
            "__v": 0
        }
    ]
}
*/