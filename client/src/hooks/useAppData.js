import { useState } from "react";

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
}