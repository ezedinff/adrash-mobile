import React, { Component, useState } from "react";
import GoogleMapReact from 'google-map-react';
import { IonLoading } from "@ionic/react";
import CustomMarker from "../CustomMarker";
import './index.css';

const uuidv1 = require('uuid/v1');

const mapStyles = {
  width: '100%',
  height: '100%',
  overflow: 'visible',
};

const GoogleMap: React.FC<{position: {lat: number; lng: number}; google: any, data: any}> = ({position, google, data}) => {
    const onMarkerClick = (f: {}) => {console.log(f)}
    return (
      <div style={mapStyles}>
      <GoogleMapReact
        style={mapStyles}
        resetBoundsOnResize
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY || "" }}
        center={position}
        defaultZoom={13}
      >
        {
          data.features
            .map((fixture: any) => (
            <CustomMarker
            lat={fixture.geometry.coordinates[1]}
            lng={fixture.geometry.coordinates[0]}
            key={uuidv1()}/>
          ))
        }
      </GoogleMapReact>
      </div>
    );
}

const Loading = () => <IonLoading isOpen={true}/>;
export default GoogleMap;