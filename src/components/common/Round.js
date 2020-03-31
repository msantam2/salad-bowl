import React from 'react';
import Cycle from '../Cycle';

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

      <Cycle key={Date.now()} incrementRound={incrementRound} />
    </div>
  );
};

const titleStyle = { textAlign: 'center', };

const descriptionStyle = {
  textAlign: 'center',
  marginBottom: 100,
};

export { Round };
