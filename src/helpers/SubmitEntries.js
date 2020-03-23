import Firebase from 'firebase/app';
import 'firebase/firestore';

const submitEntries = (entries) => {
  // entries:
  // { entry1: "a", entry2: "b", entry3: "c", entry4: "d", entry5: "e" }

  const db = Firebase.firestore();

  for (let field in entries) {
    const entry = entries[field];

    db.collection("entries").add({ entry })
    .then((docRef) => {
      console.log("Document written for entry: ", entry);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  // make more reliable when needed
  return true;
};

export { submitEntries };
