import React from 'react';

const Player = ({ competitors }) => {
  return (
    <div>
      {
        competitors.map(competitor => {
          return (
            <div className="competitor" key={competitor.id}>
              <img src={competitor.logo} alt={`${competitor.name} logo`} />
              <h2 className="competitor__name">{competitor.name}</h2>
              <h3 className="competitor__location">{competitor.location}</h3>
            </div>
          );
        })
      }
    </div>
  )
};

export default Player;
