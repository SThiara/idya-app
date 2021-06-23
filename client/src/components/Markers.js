// import React, { Fragment } from 'react'
// import {Marker} from 'react-leaflet';

// export default function Markers(props) {
//   const markers = props.namesAdj.map((item, index) => (
//     <Marker 
//       key={index} 
//       position={
//         [props.center[0] + item.adj[0], props.center[1] + item.adj[1]]
//       } 
//     />
//   ));

//   return markers
// };

import React, { Component } from 'react';
import L from 'leaflet';
import {
    Map, TileLayer, Marker, Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './style.css';


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;