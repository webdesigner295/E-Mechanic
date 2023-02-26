import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';

let app = null;
let storage = null;

const initFirebase = () => {
  const firebaseOptions = {
    apiKey: "AIzaSyBrKjga5RGPlpnpzPu8Nwzlv58qeRvmVy4",
    authDomain: "test-app-b7854.firebaseapp.com",
    projectId: "test-app-b7854",
    storageBucket: "test-app-b7854.appspot.com",
    messagingSenderId: "399306384629",
    appId: "1:399306384629:web:af29fafd7b2ecb137451bc",
    measurementId: "G-HTKQXYJWFH"
  };

  app = initializeApp(firebaseOptions);
  storage = getStorage(app);
}


export {initFirebase, app, storage};