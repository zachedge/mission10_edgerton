import React, { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      try {
        const rsp = await fetch('https://localhost:7087/bowler');
        const b = await rsp.json();
        setBowlerData(b);
      } catch (error) {
        console.error('Error fetching bowler data:', error);
      }
    };
    fetchBowlerData();
  }, []); // Empty array to ensure useEffect runs only once on component mount

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowling List</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Bowler First Name</th>
            <th>Bowler Last Name</th>
            <th>Bowler MI</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((bowler) => (
            <tr key={bowler.bowlerId}>
              <td>{bowler.team.teamName}</td>
              <td>{bowler.bowlerFirstName}</td>
              <td>{bowler.bowlerLastName}</td>
              <td>{bowler.bowlerMiddleInit}</td>
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;

// import { useEffect, useState } from 'react';
// import { Bowler } from '../types/Bowler';
// function BowlersList() {
//   const [bowlerData, setBowlerData] = useState<Bowler[]>([]);
//   useEffect(() => {
//     const fetchBowlerData = async () => {
//       const rsp = await fetch('http://localhost:5126/Bowler');
//       const b = await rsp.json();
//       setBowlerData(b);
//     };
//     fetchBowlerData();
//   }, []);
//   return (
//     <div>
//       <div className="row">
//         <h4 className="text-center">All the Bowlers</h4>
//       </div>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Middle Initial</th>
//             <th>Last Name</th>
//             <th>Team Name </th>
//             <th>Address</th>
//             <th>City</th>
//             <th>State</th>
//             <th>Zip</th>
//             <th>Phone Number</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bowlerData.map((b) => (
//             <tr key={b.bowlerID}>
//               <td>{b.bowlerFirstName}</td>
//               <td>{b.bowlerMiddleInit}</td>
//               <td>{b.bowlerLastName}</td>
//               <td>{b.teamName}</td>
//               <td>{b.bowlerAddress}</td>
//               <td>{b.bowlerCity}</td>
//               <td>{b.bowlerState}</td>
//               <td>{b.bowlerZip}</td>
//               <td>{b.bowlerPhoneNumber}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default BowlersList;
