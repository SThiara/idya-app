export default function SideView(props) {
  return (
  <table>
    <tbody>
    <tr>
      <th>Center coordinates: {props.currentLocation}</th>
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
          {(props.currentLocation[0] + item.adj[0]).toFixed(2)}
        </td>
        <td>
          {(props.currentLocation[1] + item.adj[1]).toFixed(2)}
        </td>
      </tr>
    })}
    </tbody>
  </table>
  )
}

// const sidePane = 
// (
//   <table>
//     <tbody>
//     <tr>
//       <th>Center coordinates: {[position.lat.toFixed(4), position.lng.toFixed(4)]}</th>
//     </tr>
//     <tr>
//       <th>Location</th>
//       <th>Latitude</th>
//       <th>Longitude</th>
//     </tr>
//     {namesAdj.map(item => {
//       return <tr>
//         <td>
//           {item.name}
//         </td>
//         <td>
//           {(position.lat + item.adj[0]).toFixed(4)}
//         </td>
//         <td>
//           {(position.lng + item.adj[1]).toFixed(4)}
//         </td>
//       </tr>
//     })}
//     </tbody>
//   </table>
// )

{/* <tr>
<td>Alfreds Futterkiste</td>
<td>Maria Anders</td>
<td>Germany</td>
</tr>
<tr>
<td>Centro comercial Moctezuma</td>
<td>Francisco Chang</td>
<td>Mexico</td>
</tr>
<tr>
<td>Ernst Handel</td>
<td>Roland Mendel</td>
<td>Austria</td>
</tr>
<tr>
<td>Island Trading</td>
<td>Helen Bennett</td>
<td>UK</td>
</tr>
<tr>
<td>Laughing Bacchus Winecellars</td>
<td>Yoshi Tannamuri</td>
<td>Canada</td>
</tr> */}