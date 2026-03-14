import { useEffect, useState } from 'react';
import type { Bowler } from './types/bowler';

function BowlerList() {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlers = async () => {
      const response = await fetch('https://localhost:5000/Bowling');
      const data = await response.json();
      setBowlers(data);
    };
    fetchBowlers();
  }, []);

  return (
    <table className="bowler-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Team</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {bowlers.map((b) => (
          <tr key={b.bowlerID}>
            <td>
              {b.bowlerFirstName}
              {b.bowlerMiddleInit ? ` ${b.bowlerMiddleInit}.` : ''}{' '}
              {b.bowlerLastName}
            </td>
            <td>{b.team?.teamName}</td>
            <td>{b.bowlerAddress}</td>
            <td>{b.bowlerCity}</td>
            <td>{b.bowlerState}</td>
            <td>{b.bowlerZip}</td>
            <td>{b.bowlerPhoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BowlerList;
