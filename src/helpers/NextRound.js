import Firebase from 'firebase/app';
import 'firebase/firestore';

const nextRound = (docIds) => {
  const db = Firebase.firestore();

  let batch = db.batch();
  for (let i = 0; i < docIds.length; i++) {
    let docId = docIds[i];
    let entryRef = db.collection('entries').doc(docId);
    batch.update(entryRef, { completed: false });
  }

  batch.commit().then(function() {
    const roundRef = db.collection('rounds').doc('round');
    roundRef.update({ round: Firebase.firestore.FieldValue.increment(1) });
  });
};

export { nextRound };
