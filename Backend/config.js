import {initializeApp} from 'firebase/app';

let app = null;

const initFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBrKjga5RGPlpnpzPu8Nwzlv58qeRvmVy4",
    authDomain: "test-app-b7854.firebaseapp.com",
    projectId: "test-app-b7854",
    storageBucket: "test-app-b7854.appspot.com",
    messagingSenderId: "399306384629",
    appId: "1:399306384629:web:af29fafd7b2ecb137451bc",
    measurementId: "G-HTKQXYJWFH"
  };

  app = initializeApp(firebaseConfig);
  console.log('initialized!');

}


export {initFirebase};
export {app};