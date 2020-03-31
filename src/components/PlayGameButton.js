import React from 'react';
import { ButtonSize } from './common';
import { gameReady } from '../helpers';

const PlayGameButton = () => {
  return (
    <ButtonSize
      style={{ marginTop: 30 }}
      onClick={() => gameReady()}
      size={'large'}
      type={'primary'}
    >
      PLAY
    </ButtonSize>
  );
};

export default PlayGameButton;
