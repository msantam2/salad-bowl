import React from 'react';
import Firebase from 'firebase/app';
import 'firebase/firestore';
import { Round } from './common';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { round: null };

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

  listenForRoundUpdate() {
    const db = Firebase.firestore();

    db.collection('rounds').doc('round')
    .onSnapshot((doc) => {
      console.log('Round state: ', doc.data());

      if (doc.data()) {
        const round = doc.data().round;

        if (round) {
          this.setState({ round });
        }
      }
    });
  }

  componentDidMount() {
    this.listenForRoundUpdate();
  }

  render() {
    const { round } = this.state;

    if (!round) {
      return <h1>Waiting for Round to load…</h1>
    }

    if (round <= 3) {
      return (
        <Round
          roundNumber={this.roundDetails[round]['roundNumber']}
          gameTitle={this.roundDetails[round]['gameTitle']}
          gameDescription={this.roundDetails[round]['gameDescription']}
        />
      );
    }

    return (
      <h1 style={{ textAlign: 'center' }}>
        Game Over! Hope you had fun. Refresh to play again.
      </h1>
    );
  }
}

export default Game;
