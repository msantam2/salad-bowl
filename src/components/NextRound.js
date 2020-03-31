import React from 'react';
import { ButtonSize } from './common';

const NextRound = ({ incrementRound }) => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>
        Are you ballers ready for the next round?!
      </h1>
      <h3
        style={descriptionStyle}
      >
        Click 'Next' when you're ready for the next round!
      </h3>

      <ButtonSize
        onClick={incrementRound}
        size='large'
        type='primary'
      >
        Next
      </ButtonSize>
    </div>
  );
};

const containerStyle = {
  width: '80%',
  margin: '0 auto',
  textAlign: 'center',
};

const titleStyle = { textAlign: 'center', };

const descriptionStyle = {
  textAlign: 'center',
  marginBottom: 100,
};

export default NextRound;
