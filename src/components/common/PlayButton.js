import React from 'react';
import { ButtonSize } from './ButtonSize';

const PlayButton = ({ playFunc, children }) => {
  return (
    <ButtonSize
      style={{ marginTop: 30 }}
      onClick={() => playFunc()}
      size='large'
      type='primary'
    >
      {children}
    </ButtonSize>
  );
};

export { PlayButton };
