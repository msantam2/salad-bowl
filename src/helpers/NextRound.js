import Firebase from 'firebase/app';
import 'firebase/firestore';

const nextRound = () => {
  const db = Firebase.firestore();

  const roundRef = db.collection('rounds').doc('round');
  roundRef.update({ round: Firebase.firestore.FieldValue.increment(1) });
};

export { nextRound };
