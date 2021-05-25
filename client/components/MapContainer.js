import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";


const api_key = "AIzaSyARZ6DOsIps1oAQDL4QfZj7dENtlJAsokk";
Geocode.setApiKey(api_key);



class MapContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mapsinit: 'United States',
            markerLocations: ['Boston, MA', 'New York, New York'],
            mapsLatLng: [37.4238253802915, -122.0829009197085],
            mapZoom: [1.5, 8],
            current:'homePage'
        };
    }
       
        
    
    componentDidMount() {
        Geocode.fromAddress(this.state.mapsinit)
        .then((response) => {
            
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng)
            this.setState ={mapsLatLng: [lat, lng]}
            console.log(this.state.mapsLatLng[0])

        })
        

        Geocode.fromAddress(this.state.markerLocations)
            .then((response) => {console.log(response)})

        // const markers = [];
        // for (let i = 0; i< this.state.markerLocations.length; i++){
        //     Geocode.fromAddress(this.state.markerLocations[i])
        //     .then((response) => {
        //         const { lat, lng } = response.results[0].geometry.location;
        //         markers.push(
        //             <Marker key={i}  
        //                 position={{
        //                     lat: lat,
        //                     lng: lng
        //                 }}
        //             />
        //         ) 
        //     })
        // }
    }


    render() {
        const mapStyle = {
            width: '80%',
            height: '50%',
        };

        if (this.state.current === 'homePage') {
            return(
                <div id="map">
                    <h3> Travel Board </h3>
                    <Map
                        google={this.props.google}
                        zoom={this.state.mapZoom[0]}
                        style={mapStyle}
                        initialCenter={{ lat: this.state.mapsLatLng[0], lng: this.state.mapsLatLng[1]}}
                    >
                        {/* {markers} */}
                        <Marker position={{lat: 37.4238253802915, lng: -122.0829009197085}} />
                    </Map>
                </div>
            )
        } else if (this.state.current === 'post') {
            return(
                <div id="map">
                    <h3> Travel Board </h3>
                    <Map
                        google={this.props.google}
                        zoom={this.state.mapZoom[1]}
                        style={mapStyle}
                        initialCenter={{ lat: this.state.mapsLatLng[0], lng: this.state.mapsLatLng[1]}}
                    >
                        {/* {markers} */}
                        <Marker position={{lat: 37.4238253802915, lng: -122.0829009197085}} />
                    </Map>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default GoogleApiWrapper({
    apiKey: api_key,
})(MapContainer);





