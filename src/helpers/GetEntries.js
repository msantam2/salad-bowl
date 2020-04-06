import Firebase from 'firebase/app';
import 'firebase/firestore';

const getEntries = async (entriesToFetch) => {
  const db = Firebase.firestore();

  let collection;
  switch (entriesToFetch) {
    case 'all':
      collection = 'entries';
      break;
    case 'still in bowl':
      collection = 'still_in_bowl';
      break;
    default:
      console.log('collection not set');
  }  
  
  let entries = [];

  await db.collection(collection).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      entries.push(doc.data().entry);
    });
  });

  return entries;
};

export { getEntries };
