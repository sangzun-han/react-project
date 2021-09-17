import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBh2yaNbH1aN6yKA_q1yDzBFV2Ez9HETH8',
  authDomain: 'instagram-react-sangzun.firebaseapp.com',
  projectId: 'instagram-react-sangzun',
  storageBucket: 'instagram-react-sangzun.appspot.com',
  messagingSenderId: '1041842309665',
  appId: '1:1041842309665:web:1f746d475d5bca10e7f160',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file
seedDatabase(firebase);

console.log(firebase);
export { firebase, FieldValue };
