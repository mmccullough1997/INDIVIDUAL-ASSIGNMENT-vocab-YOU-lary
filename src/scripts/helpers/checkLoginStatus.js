import firebase from 'firebase/app';
import firebaseConfig from '../../api/apiKeys';
import loginButton from '../components/buttons/loginButton';
import startApp from './startApp';

const checkLoginStatus = () => {
  // This line initializes your firebase app using the values from your .env file
  firebase.initializeApp(firebaseConfig);

  // This function is looking for anytime the Auth State Changes.
  // In this app, this happens on 2 occasions:
  // 1. When a user logs in, their auth state changes to logged in
  // 2. When a user logs out, their auth state changes to logged out
  // Inside of this function, we will determine what happens when a user logs in and what happens when they log out
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.warn('Firebase Authenticated User:', user);
      startApp(user);
    } else {
      loginButton();
    }
  });
};

export default checkLoginStatus;
