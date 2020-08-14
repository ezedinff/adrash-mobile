import React, { useState } from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import './index.css';
const CustomMap: React.FC = () => {
    const [position, setPosition] = useState([51.505, -0.09])
    const [zoom, setzoom] = useState(13)
    return (
      <Map center={[45.4, -75.7]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          key={"fdaffdfsa"}
          position={[
            45.4,
           -75.7
          ]}
          onClick={() => {
            console.log("clikced")
          }}
        />
      </Map>
    );
}

export default CustomMap;
