import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import { IonLoading } from "@ionic/react";

const mapStyles = {
  width: '100%',
  height: '100%'
};

const GoogleMap: React.FC<{position: {latitude: number; longitude: number}; google: any}> = ({position, google}) => {
    const onMarkerClick = () => {console.log("clicked")}
    return (
      <div>
        <Map
          google={google}
          style={mapStyles}
          initialCenter={{
            lat: position.latitude,
            lng: position.longitude
          }}
        >
         <Marker
          onClick={onMarkerClick}
        />
        </Map>
      </div>
    );
}

const Loading = () => <div>Fancy loading container</div>;
const apiKey = process.env.API_KEY || "YOUR_API_KEY";
export default GoogleApiWrapper({
  apiKey: apiKey,
  libraries: ['places', 'visualization'],
  LoadingContainer: Loading
})(GoogleMap);