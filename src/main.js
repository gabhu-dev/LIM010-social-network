// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

import { initRouter } from './lib/controller/router.js';

const init = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDfuLuqE0BCBBNZk-DklM0JRJ3hdyflVSU',
    authDomain: 'social-network-3938b.firebaseapp.com',
    databaseURL: 'https://social-network-3938b.firebaseio.com',
    projectId: 'social-network-3938b',
    storageBucket: '',
    messagingSenderId: '887676341487',
    appId: '1:887676341487:web:3e837b84e4501e0f',
  };
  firebase.initializeApp(firebaseConfig);
};

window.addEventListener('load', () => {
  initRouter();
  init();
});
