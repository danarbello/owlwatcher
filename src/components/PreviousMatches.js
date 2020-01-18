import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PreviousMatches() {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.overwatchleague.com/matches'
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <section>
      match data
    </section>
  )
}

export default PreviousMatches;
