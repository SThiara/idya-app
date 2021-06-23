import React, {useState, useCallback, useEffect} from 'react';
import './App.css';
import useAppData from './hooks/useAppData';
import SideView from './components/SideView';

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

export default function App() {
  const {state, updatePosition} = useAppData();

  const namesAdj = [
    {
      name: 'Alfreds Futterkiste',
      adj: [0, 0]
    },
    {
      name: 'Centro comercial Moctezuma',
      adj: [0.02, 0.02]
    },
    {
      name: 'Ernst Handel',
      adj: [0.02, -0.02]
    },
    {
      name: 'Island Trading',
      adj: [-0.02, 0.02]
    },
    {
      name: 'Laughing Bacchus Winecellars',
      adj: [-0.02, -0.02]
    }
  ]

function DisplayPosition({ map }) {

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
        [(state.position.lat + item.adj[0]).toFixed(2), (state.position.lng + item.adj[1]).toFixed(2)]
      } 
      >
      <Popup>
        {item.name}, located at {[(state.position.lat + item.adj[0]).toFixed(2), (state.position.lng + item.adj[1]).toFixed(2)]}
      </Popup>
      </Marker> 
  ));

  return markers
}

function GenerateMap() {
  const [map, setMap] = useState(null)

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
    <SideView className="sideview" position={state.position} namesAdj={namesAdj} />
</div>
}