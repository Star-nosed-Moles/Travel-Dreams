import React from 'react';
import {Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";


const api_key = "AIzaSyARZ6DOsIps1oAQDL4QfZj7dENtlJAsokk";
Geocode.setApiKey(api_key);



class MapContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mapsinit: 'United States',
            markerLocations: ['Boston, MA', 'New York, New York'],
            mapsLatLng: [37.4238253802915, -122.0829009197085]
        };
    }
       
        
    
    componentDidMount() {
        Geocode.fromAddress(this.state.mapsinit)
        .then((response) => {
            const { lat, lng } = response.results[0].geometry.location;
            this.setState ={mapsLatLng: [lat, lng]}
        })
        
        const markers =[];
        for (let i = 0; i< this.state.markerLocations.length; i++){
            Geocode.fromAddress(this.state.markerLocations[i])
            .then((response) => {
                const { lat, lng } = response.results[0].geometry.location;
                markers.push(
                    <Marker key={i}  
                        position={{
                            lat: mapLat,
                            lng: mapLng
                        }}
                    />
                ) 
            })
        }
    }


    render() {
        const mapStyle = {
            width: '80%',
            height: '50%',
          };

        return(
            <div id="map">
                <h1> This is the Map Component</h1>
                <Map
                    google={this.props.google}
                    zoom={10}
                    style={mapStyle}
                    initialCenter={{ lat: 37.4238253802915, lng: -122.0829009197085}}
                >
                    {/* {markers} */}
                    <Marker position={{lat: 37.4238253802915, lng: -122.0829009197085}} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: api_key,
})(MapContainer);





