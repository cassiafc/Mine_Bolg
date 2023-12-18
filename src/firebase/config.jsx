import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgXloTHQJ9DtTWMO3NO-6Go0HBiMscs1s",
  authDomain: "miniblog-bbc5c.firebaseapp.com",
  projectId: "miniblog-bbc5c",
  storageBucket: "miniblog-bbc5c.appspot.com",
  messagingSenderId: "831293451606",
  appId: "1:831293451606:web:f0961db27bcd6fa90afaf7"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };