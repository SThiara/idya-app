// export default function SideView(props) {
//   return (
//   <table>
//     <tbody>
//     <tr>
//       <th>Center coordinates: {props.currentLocation}</th>
//     </tr>
//     <tr>
//       <th>Location</th>
//       <th>Latitude</th>
//       <th>Longitude</th>
//     </tr>
//     {props.namesAdj.map(item => {
//       return <tr>
//         <td>
//           {item.name}
//         </td>
//         <td>
//           {(props.currentLocation[0] + item.adj[0]).toFixed(2)}
//         </td>
//         <td>
//           {(props.currentLocation[1] + item.adj[1]).toFixed(2)}
//         </td>
//       </tr>
//     })}
//     </tbody>
//   </table>
//   )
// }

export default function SideView(props) {
  return (
      <table className="sideview">
        <tbody>
        <tr>
          <th>Center coordinates: {props.position.lat.toFixed(2)}, {props.position.lng.toFixed(2)}</th>
        </tr>
        <tr>
          <th>Location</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
        {props.namesAdj.map(item => {
          return <tr>
            <td>
              {item.name}
            </td>
            <td>
              {(props.position.lat + item.adj[0]).toFixed(2)}
            </td>
            <td>
              {(props.position.lng + item.adj[1]).toFixed(2)}
            </td>
          </tr>
        })}
        </tbody>
      </table>
    )
}