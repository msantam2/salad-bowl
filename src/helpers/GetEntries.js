import Firebase from 'firebase/app';
import 'firebase/firestore';

const getEntries = async () => {
  const db = Firebase.firestore();
  let entries = [];

  await db.collection('entries').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      entries.push(doc.data().entry);
    });
  });

  return entries;
};

export { getEntries };
