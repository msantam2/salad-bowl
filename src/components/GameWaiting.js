import React from 'react';
import Firebase from 'firebase/app';
import 'firebase/firestore';
import PlayGame from './PlayGame';
import RoundOne from './RoundOne';

class GameWaiting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameReady: false };
  }

  listenForGameReady() {
    const db = Firebase.firestore();

    db.collection('game').doc('ready')
    .onSnapshot((doc) => {
      console.log('Game ready state: ', doc.data());

      if (doc.data()) {
        const ready = doc.data().ready;

        if (ready) {
          this.setState({ gameReady: true });
        }
      }
    });
  }

  componentDidMount() {
    this.listenForGameReady();
  }

  render() {
    if (this.state.gameReady) {
      return <RoundOne />;
    } else {
      return (
        <div style={{ textAlign: 'center', width: '80%' }}>
          <h2>Thank you for your entries into the bowl, weirdo.</h2>
          <PlayGame />
        </div>
      );
    }
  }
};

export default GameWaiting;
