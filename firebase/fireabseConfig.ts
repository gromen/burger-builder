import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBOxa84J4FyopVZD7Om6lFIWDcm3oRi-ek',
  authDomain: 'react-burger-701.firebaseapp.com',
  databaseURL: 'https://react-burger-701-default-rtdb.firebaseio.com',
  projectId: 'react-burger-701',
  storageBucket: 'react-burger-701.appspot.com',
  messagingSenderId: '286197718612',
  appId: '1:286197718612:web:e01b1ecce8eb4dc7ded7c1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

export { app, auth, database };
