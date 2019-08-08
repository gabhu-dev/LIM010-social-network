/* eslint-disable no-unused-vars */
// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

import { initRouter } from './lib/router.js';

const init = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCzOVX48hfcP2uV_jXXl0swn3EcYaa5B2s',
    authDomain: 'dramaniac-1205.firebaseapp.com',
    databaseURL: 'https://dramaniac-1205.firebaseio.com',
    projectId: 'dramaniac-1205',
    storageBucket: '',
    messagingSenderId: '113897147089',
    appId: '1:113897147089:web:dc3bc07dc677845b',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};

window.addEventListener('load', () => {
  initRouter();
});
