import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import * as _ from 'lodash';
import Player from './components/Player';
import PreviousMatches from './components/PreviousMatches';

function App() {
  const [data, setData] = useState({ data: [] });

  const urlBase = 'https://api.overwatchleague.com/';

  useEffect(() => {
    const getLiveMatches = axios.get(`${urlBase}/live-match`);
    const getPreviousMatches = axios.get(`${urlBase}/matches`);

    axios
      .all([getLiveMatches, getPreviousMatches])
      .then(
        axios.spread((...responses) => {
          const liveMatch = responses[0].data;
          const previousMatch = responses[1].data;

          setData([liveMatch, previousMatch]);
        })
      );
  }, []);

  // @TODO - Re-wire this up w/ new data from above.


  const upcomingMatch = _.isEmpty(data.nextMatch) ? 'No upcoming matches either' : 'Some upcoming match component';

  // If data exists show it, otherwise don't bother.
  if (data.length) {
    const liveMatches = data[0].data.liveMatch;
    const nextMatch = data[0].data.nextMatch;
    const previousMatches = data[1];

    if (!_.isEmpty(liveMatches)) {
      return <Player />;
    } else {
      return (
        <React.Fragment>
          { upcomingMatch }
          <PreviousMatches />
        </React.Fragment>
      );
    }
  } else {
    return null;
  }
};

export default App;
