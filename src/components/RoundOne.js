import React from 'react';
import TimerWithWords from './TimerWithWords';

const RoundOne = () => {
  return (
    <div>
      <h1
        style={{ textAlign: 'center' }}
      >
        Round One: Catch Phrase
      </h1>
      <h3
        style={{ textAlign: 'center', marginBottom: 100 }}
      >
        Describe the word or phrase, without saying it!
      </h3>

      <TimerWithWords />
    </div>
  );
};

export default RoundOne;
