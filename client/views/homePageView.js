import React from 'react';
import MapContainer from './MapContainer.js'
import CardsContainer from './CardsContainer.js'

class HomePageView extends React.Component {

  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <MapContainer />
        <h2>My Dreams</h2>
        <CardsContainer />
      </div>
    );
  };
};

export default HomePageView;