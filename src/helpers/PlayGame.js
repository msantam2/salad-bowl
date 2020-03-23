import Firebase from 'firebase/app';
import 'firebase/firestore';

const playGame = () => {
  const db = Firebase.firestore();

  db.collection('game').doc('ready')
  .set({ ready: true, })
  .then(() => {
    console.log('Game is ready!');
  })
  .catch((error) => {
    console.error('Error making game ready');
  });
};

export { playGame };
