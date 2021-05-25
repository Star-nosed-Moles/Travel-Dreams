import React from 'react';
import MapContainer from '../components/MapContainer.js'
import CardsContainer from '../components/CardsContainer.js'

class HomePageView extends React.Component {

  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <MapContainer />
        {/* <h2>My Dreams</h2> */}
        <CardsContainer />
      </div>
    );
  };
};

export default HomePageView;