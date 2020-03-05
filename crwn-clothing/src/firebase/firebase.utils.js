import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDowYBy1dBXvLx1GTsJJ16whE_p46rYQEU",
  authDomain: "crwn-clothing-5d07c.firebaseapp.com",
  databaseURL: "https://crwn-clothing-5d07c.firebaseio.com",
  projectId: "crwn-clothing-5d07c",
  storageBucket: "crwn-clothing-5d07c.appspot.com",
  messagingSenderId: "227258659922",
  appId: "1:227258659922:web:9ced7728d909e16a1f9b8b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// Utility Functions
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch (err) {
      console.log('Error creating user: ', err);
    }
  }

  return userRef;
};