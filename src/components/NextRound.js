import React from 'react';
import { nextRound } from '../helpers';
import { ButtonSize } from './common';

const NextRound = () => {
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
        onClick={nextRound}
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
