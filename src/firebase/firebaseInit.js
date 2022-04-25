import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVgqh-H-fALWhTfHwc6M3N6h9zN8Bzdmg",
    authDomain: "bzeducators.firebaseapp.com",
    projectId: "bzeducators",
    storageBucket: "bzeducators.appspot.com",
    messagingSenderId: "624621682942",
    appId: "1:624621682942:web:c28b88c0d91b7d149ca5af",
    measurementId: "G-S8JSSGP3RJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp};
  export default firebaseApp.firestore();
