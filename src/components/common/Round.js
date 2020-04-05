import React from 'react';
import CycleManager from '../CycleManager';

const Round = ({ roundNumber, gameTitle, gameDescription }) => {
  return (
    <div style={containerStyle}>
      <h1>
        Round {roundNumber}: {gameTitle}
      </h1>
      <h3 style={descriptionStyle}>
        {gameDescription}
      </h3>

      <CycleManager key={Date.now()} />
    </div>
  );
};

const containerStyle = { textAlign: 'center', };

const descriptionStyle = {
  textAlign: 'center',
  marginBottom: 100,
};

export { Round };
