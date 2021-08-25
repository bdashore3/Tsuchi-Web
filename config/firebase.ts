import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {};

const Firebase = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const Providers = {
  google: new firebase.auth.GoogleAuthProvider()
};

export const auth = firebase.auth();
export default Firebase;
