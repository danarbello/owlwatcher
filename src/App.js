import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import * as _ from 'lodash';

function App() {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.overwatchleague.com/live-match?expand=team.content&locale=en-us'
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  const liveMatches = data.data.liveMatch;

  // If data exists show it, otherwise don't bother.
  if (!_.isEmpty(liveMatches)) {
    return _.map(liveMatches.competitors, competitor => {
      return (
        // We need to check the `STATE` and ping server every X seconds if "IN PROGRESS"
        <div>
          <img src={competitor.icon} alt="" height="60" width="60" />
          <h1>
            {competitor.name}, <small>{competitor.addressCountry}</small>
          </h1>
        </div>
      );
    });
  } else {
    return null;
  }
}

export default App;
