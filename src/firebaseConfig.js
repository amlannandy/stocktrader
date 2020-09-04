import * as firebase from 'firebase/app';
import 'firebase/firestore';

import credentials from './firebaseCredentials';

const firebaseConfig = {
  apiKey: credentials.apiKey,
  authDomain: credentials.authDomain,
  databaseURL: credentials.databaseURL,
  projectId: credentials.projectId,
  storageBucket: credentials.storageBucket,
  messagingSenderId: credentials.messagingSenderId,
  appId: credentials.appId,
  measurementId: credentials.measurementId,
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
