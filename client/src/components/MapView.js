import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

//import useMapData from "../hooks/useMapData"

// export default function MapView() {
//   const {state} = useMapData();

//   return (
//     state.currentLocation === null ? `Loading...` :
//     <MapContainer center={state.currentLocation} zoom={state.zoom}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//       />
//       <Marker position={state.currentLocation}/>
//     </MapContainer>
//   );
// }

export default function MapView(props) {
  // const displayMap = useMemo(
  //   () => (
  //     <MapContainer
  //       center={props.currentLocation}
  //       zoom={props.zoom}
  //       whenCreated={props.setMap}>
  //       <TileLayer
  //         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       />
  //       <Markers center={props.currentLocation} namesAdj={props.namesAdj}/>
  //     </MapContainer>
  //   ),
  //   []
  // )

//   return (
//       <MapContainer
//         center={props.currentLocation}
//         zoom={props.zoom}
//         whenCreated={props.setMap}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Markers center={props.currentLocation} namesAdj={props.namesAdj}/>
//       </MapContainer>
//   )
}