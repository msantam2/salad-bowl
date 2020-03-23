import Firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyCUaotitJcs5tsaYSpV2deY60reIXJx2Yg",
  authDomain: "salad-bowl-407d9.firebaseapp.com",
  databaseURL: "https://salad-bowl-407d9.firebaseio.com",
  projectId: "salad-bowl-407d9",
  storageBucket: "salad-bowl-407d9.appspot.com",
  messagingSenderId: "797874629900",
  appId: "1:797874629900:web:dfdb9ef581fc9c20c06d29",
  measurementId: "G-SGXPDDJQRR"
};

const initFirebase = () => Firebase.initializeApp(config);

export default initFirebase;
