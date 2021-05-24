import React from 'react';
// import {Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import Geocode from "react-geocode";
// Geocode.setApiKey("AIzaSyA4SgOj9dUgrVleGtXo_0jOxQfGd-thrlE")
 


class MapContainer extends React.Component {
  render() {
    return (
      <div>
        Map
      </div>
    );
  };
};

export default MapContainer;

// constructor(props){
//   super(props);
//   this.state = {
//       mapsinit: 'United States',
//       markerLocations: ['Boston, MA', 'New York, New York']
//   };
// }

// let mapLat;
// let mapLng; 
// Geocode.fromAddress(this.state.mapsinit)
//     .then((response) => {
//         const { lat, lng } = response.results[0].geometry.location;
//         mapLat = lat;
//         mapLng = lng;
//     })

// const markers =[];
// for(let i = 0; i< this.state.markerLocations.length; i++){
//     Geocode.fromAddress(this.state.markerLocations[i])
//     .then((response) => {
//     const { lat, lng } = response.results[0].geometry.location;
//     markers.push(
//         <Marker key={i}  
//             position={{
//                 lat: lat,
//                 lng: lng
//             }}
//         />) 
// }
// )
// }

            // <Map
            //     google={this.props.google}
            //     zoom={8}
            //     style={mapStyles}
               
            //     initialCenter={{ mapLat, mapLng}}
                
            //     {markers}
            // </Map>
            //     {/* map here */}]