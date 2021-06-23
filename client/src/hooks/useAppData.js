import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useAppData() {
  const [state, setState] = useState({
    center: [48.4221, -123.3623],
    position: {lat: 48.4221, lng: -123.3623},
    zoom: 12
  })

  const updatePosition = function(coords) {
    setState(prev => ({
      ...prev,
      position: {
        lat: coords[0],
        lng: coords[1]
      }
    }))
  }

  return {
    state,
    updatePosition
  }

  // useEffect(() => {
  //   axios.get("/api")
  //   .then(res =>
  //     setState(prev => ({
  //     ...prev,
  //     currentLocation: [...res.data]
  //   }))
  //   )
  // }, []);

  // const setMap = map => {
  //   setState(prev => ({
  //     ...prev,
  //     map
  //   }))
  // }

  // const UpdatePosition = async function(state) {
  //   await axios.put('/api', state)
  //   console.log("test2")
  // }

  // const onMove = useCallback(() => {
  //   setState(prev => ({
  //     ...prev,
  //     tempLocation: state.map.getCenter()
  //   }))
  // }, [state.map])

  // useEffect(() => {
  //   if (state.map !== null) {
  //     state.map.on('move', onMove)
  //     //console.log([state.tempLocation.lat, state.tempLocation.lng])
  //     return () => {
  //       state.map.off('move', onMove);
  //       console.log(state.currentLocation)
  //       UpdatePosition([state.tempLocation.lat, state.tempLocation.lng])
  //       .then(() => axios.get('/api'))
  //       .then(res => {
  //         setState(prev => ({
  //           ...prev,
  //           currentLocation: [
  //             res.data[0].toFixed(4),
  //             res.data[1].toFixed(4)
  //           ]
  //         }))
  //       })
  //     }
  //   }
  // })

}