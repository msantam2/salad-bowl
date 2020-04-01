import Firebase from 'firebase/app';
import 'firebase/firestore';

const gameReady = () => {
  const db = Firebase.firestore();

  db.collection('game').doc('ready')
  .set({ ready: true })
  .then(() => {
    console.log('Game is ready!');
  })
  .catch((error) => {
    console.error('Error making game ready');
  });

  db.collection('rounds').doc('round')
  .set({ round: 1 })
  .then(() => {
    console.log('Round 1 is ready!');
  })
  .catch((error) => {
    console.error('Error making round 1 ready');
  });
};

export { gameReady };
