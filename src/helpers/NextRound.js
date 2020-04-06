import Firebase from 'firebase/app';
import 'firebase/firestore';

const nextRound = () => {
  const db = Firebase.firestore();

  // also need to reset all entries 'completed' field to false

  const roundRef = db.collection('rounds').doc('round');
  roundRef.update({ round: Firebase.firestore.FieldValue.increment(1) });
};

export { nextRound };
