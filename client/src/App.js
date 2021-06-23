//import useAppData from "./hooks/useAppData"

import ReactDOM from 'react-dom'
import React, {useState, useCallback, useEffect, useMemo, render} from 'react';
import MapView from './components/MapView';
import SideView from './components/SideView';
import './App.css';
import useAppData from './hooks/useAppData';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

// export default function App() {
//   const {state, setMap} = useAppData();

//   const namesAdj = [
//     {
//       name: 'Alfreds Futterkiste',
//       adj: [0, 0]
//     },
//     {
//       name: 'Centro comercial Moctezuma',
//       adj: [0.05, 0.05]
//     },
//     {
//       name: 'Ernst Handel',
//       adj: [0.05, -0.05]
//     },
//     {
//       name: 'Island Trading',
//       adj: [-0.05, 0.05]
//     },
//     {
//       name: 'Laughing Bacchus Winecellars',
//       adj: [-0.05, -0.05]
//     }
//   ]

//   return (
//     <div className='totalview'>
//       <MapView
//         currentLocation={state.currentLocation}
//         zoom={state.zoom}
//         setMap={setMap}
//         namesAdj={namesAdj}
//       />
//       <SideView 
//         className='sideview'
//         currentLocation={state.currentLocation}
//         namesAdj={namesAdj}
//       />
//     </div>
//   );
// }

export default function App() {
  const {state, updatePosition} = useAppData();

  const center = [48.4221, -123.3623]
  const zoom = 13

  const namesAdj = [
    {
      name: 'Alfreds Futterkiste',
      adj: [0, 0]
    },
    {
      name: 'Centro comercial Moctezuma',
      adj: [0.05, 0.05]
    },
    {
      name: 'Ernst Handel',
      adj: [0.05, -0.05]
    },
    {
      name: 'Island Trading',
      adj: [-0.05, 0.05]
    },
    {
      name: 'Laughing Bacchus Winecellars',
      adj: [-0.05, -0.05]
    }
  ]

function DisplayPosition({ map }) {
  //const [position, setPosition] = useState({lat: center[0], lng: center[1]})

  const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));

  const delayUpdate = async function() {
    const test = map.getCenter()
    await wait(400)
    const test2 = map.getCenter()
    await wait(400)
    if (test.lat === test2.lat) {
      axios.put('/api', [Number(test2.lat.toFixed(4)), Number(test2.lng.toFixed(4))])
      .then(res => updatePosition([res.data[0], res.data[1]]))
    }
  }

  const onMove = useCallback(() => {
    delayUpdate()
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  const markers = namesAdj.map((item, index) => (
    <Marker
      key={index} 
      position={
        [(state.position.lat + item.adj[0]).toFixed(4), (state.position.lng + item.adj[1]).toFixed(4)]
      } 
      >
      <Popup>
        {item.name}, located at {[(state.position.lat + item.adj[0]).toFixed(4), (state.position.lng + item.adj[1]).toFixed(4)]}
      </Popup>
      </Marker> 
  ));

  return markers


  // return (
  //   <p>
  //     {`${'latitude: ' + position.lat.toFixed(4)}, ${'longitude: ' + position.lng.toFixed(4)} `}
  //     <button onClick={onClick}>reset</button>
  //   </p>
  // )
}

function GenerateSidePanel() {
  return (
      <table className="sideview">
        <tbody>
        <tr>
          <th>Center coordinates: {[state.position.lat.toFixed(4), state.position.lng.toFixed(4)]}</th>
        </tr>
        <tr>
          <th>Location</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
        {namesAdj.map(item => {
          return <tr>
            <td>
              {item.name}
            </td>
            <td>
              {(state.position.lat + item.adj[0]).toFixed(4)}
            </td>
            <td>
              {(state.position.lng + item.adj[1]).toFixed(4)}
            </td>
          </tr>
        })}
        </tbody>
      </table>
    )
}

// function GenerateMarkers() {
//   const markers = namesAdj.map((item, index) => (
//     <Marker 
//       key={index} 
//       position={
//         [(position.lat + item.adj[0]).toFixed(4), (position.lng + item.adj[1]).toFixed(4)]
//       } 
//     />
//   ));

//   return markers
// }

function GenerateMap() {
  const [map, setMap] = useState(null)

  // const displayMap = useMemo(
  //   () => (
  //     <MapContainer
  //       center={center}
  //       zoom={zoom}
  //       whenCreated={setMap}>
  //       <TileLayer
  //         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       />
  //       {map ? <DisplayPosition map={map} /> : null}
  //     </MapContainer>
  //   ),
  //   [],
  // )

  return (
    <div className="mapview">
      <MapContainer
        center={state.center}
        zoom={state.zoom}
        whenCreated={setMap}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {map ? <DisplayPosition map={map} /> : null}
      </MapContainer>
    </div>
  )
}

return <div className="totalview">
{GenerateMap()}
<GenerateSidePanel className="sideview"/>
</div>
}