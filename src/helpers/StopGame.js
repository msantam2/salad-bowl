import Firebase from 'firebase/app';
import 'firebase/firestore';

const stopGame = () => {
  const db = Firebase.firestore();

  db.collection('game').doc('ready')
  .set({ ready: false, })
  .then(() => {
    console.log('Game is stopped!');
  })
  .catch((error) => {
    console.error('Error making game stopped');
  });
};

export { stopGame };
