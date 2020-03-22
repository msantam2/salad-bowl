import Firebase from 'firebase/app';
import 'firebase/firestore';

const submitEntries = (values) => {
  // values:
  // { entry1: "a", entry2: "b", entry3: "c", entry4: "d", entry5: "e" }

  const db = Firebase.firestore();
  
};

export { submitEntries };
