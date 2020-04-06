import Firebase from 'firebase/app';
import 'firebase/firestore';

const updateBowl = (completedEntries) => {
  const db = Firebase.firestore();

  for (let i = 0; i < completedEntries.length; i++) {
    const entry = completedEntries[i];

    db.collection('entries').doc(entry).set({ completed: true })
    .then((_docRef) => {
      console.log('Document marked as completed: ', entry);
    })
    .catch((error) => {
      console.error('Error marking document completed: ', error);
    });
  }

  // make more reliable when needed
  return true;
};

export { updateBowl };
