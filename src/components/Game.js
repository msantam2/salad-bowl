import React from 'react';
import { Round } from './common';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { round: 1 };
    this.incrementRound = this.incrementRound.bind(this);

    this.roundDetails = {
      1: {
        roundNumber: 'One',
        gameTitle: 'Catch Phrase',
        gameDescription: 'Describe the word or phrase, without saying it!',
      },
      2: {
        roundNumber: 'Two',
        gameTitle: 'Charades',
        gameDescription: 'You know the drill. Act that shit out.',
      },
      3: {
        roundNumber: 'Three',
        gameTitle: 'One-Word-Only (FINAL ROUND)',
        gameDescription: 'Describe the word or phrase, using only a single word!',
      },
    }
  }

  incrementRound() {
    this.setState({ round: this.state.round + 1 });
  }

  render() {
    const { round } = this.state;

    if (round <= 3) {
      return (
        <Round
          roundNumber={this.roundDetails[round]['roundNumber']}
          gameTitle={this.roundDetails[round]['gameTitle']}
          gameDescription={this.roundDetails[round]['gameDescription']}
          incrementRound={this.incrementRound}
        />
      );
    } else {
      return (
        <h1
          style={{ textAlign: 'center' }}
        >
          Game Over! Hope you had fun. Refresh to play again.
        </h1>
      );
    }
  }
}

export default Game;
