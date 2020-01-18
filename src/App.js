import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import * as _ from 'lodash';
import Player from './components/Player';

function App() {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.overwatchleague.com/live-match'
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  const liveMatches = data.data.liveMatch;
  const upcomingMatch = _.isEmpty(data.data.nextMatch) ? 'No upcoming matches either' : 'Some upcoming match component';

  // If data exists show it, otherwise don't bother.
  if ((!_.isEmpty(data.data))) {
    if (!_.isEmpty(liveMatches)) {
      return <Player />;
    } else {
    return <React.Fragment>{ upcomingMatch }</React.Fragment>
    }
  } else {
    return null;
  }
};

export default App;
