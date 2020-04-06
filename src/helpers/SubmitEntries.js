import Firebase from 'firebase/app';
import 'firebase/firestore';

const submitEntries = (entries) => {
  const db = Firebase.firestore();

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const uniqueEntryId = `${entry}-${i}`;

    db.collection('entries').doc(uniqueEntryId).set({ completed: false })
    .then((_docRef) => {
      console.log('Document written for entry: ', entry);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  }

  // make more reliable when needed
  return true;
};

export { submitEntries };
