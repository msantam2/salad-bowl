import React from 'react';
import TimerWithWords from '../TimerWithWords';

const Round = ({ roundNumber, gameTitle, gameDescription }) => {
  return (
    <div>
      <h1
        style={{ textAlign: 'center' }}
      >
        Round {roundNumber}: {gameTitle}
      </h1>
      <h3
        style={{ textAlign: 'center', marginBottom: 100 }}
      >
        {gameDescription}
      </h3>

      <TimerWithWords />
    </div>
  );
};

export { Round };
