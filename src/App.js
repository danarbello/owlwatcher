import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

function App() {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.overwatchleague.com/stats/players'
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Player Name</th>
          <th>Role</th>
          <th>Team</th>
          <th>
            K/D ratio <small>(Avg. per 10min)</small>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.data.map(player => (
          <tr key={player.playerId}>
            <td>{player.name}</td>
            <td>{player.role}</td>
            <td>{player.team}</td>
            <td>
              {player.eliminations_avg_per_10m.toFixed(2)}/
              {player.deaths_avg_per_10m.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
