import React from 'react';
import Firebase from 'firebase/app';
import 'firebase/firestore';

import Game from './Game';
import { PlayButton } from './common';
import { gameReady } from '../helpers'

class GameWaitingRoom extends React.Component {
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
      return <Game />;
    } else {
      return (
        <div style={{ textAlign: 'center', width: '80%' }}>
          <h2>Thank you for your entries into the bowl, weirdo.</h2>
          <PlayButton playFunc={gameReady}>PLAY</PlayButton>
        </div>
      );
    }
  }
};

export default GameWaitingRoom;
