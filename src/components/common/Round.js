import React from 'react';
import TimerWithWords from '../TimerWithWords';

const Round = ({ roundNumber, gameTitle, gameDescription, incrementRound }) => {
  return (
    <div>
      <h1 style={titleStyle}>
        Round {roundNumber}: {gameTitle}
      </h1>
      <h3
        style={descriptionStyle}
      >
        {gameDescription}
      </h3>

      <TimerWithWords incrementRound={incrementRound} />
    </div>
  );
};

const titleStyle = { textAlign: 'center', };

const descriptionStyle = {
  textAlign: 'center',
  marginBottom: 100,
};

export { Round };
