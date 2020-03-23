import React from 'react';
import { ButtonSize } from './common';
import { playGame } from '../helpers';

const PlayGame = () => {
  return (
    <ButtonSize
      style={{ marginTop: 30 }}
      onClick={() => playGame()}
      size={'large'}
      type={'primary'}
    >
      PLAY
    </ButtonSize>
  );
};

export default PlayGame;
