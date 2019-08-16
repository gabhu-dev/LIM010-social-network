import { viewTemplate } from './lib/controller/router.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDfuLuqE0BCBBNZk-DklM0JRJ3hdyflVSU',
  authDomain: 'social-network-3938b.firebaseapp.com',
  databaseURL: 'https://social-network-3938b.firebaseio.com',
  projectId: 'social-network-3938b',
  storageBucket: '',
  messagingSenderId: '887676341487',
  appId: '1:887676341487:web:3e837b84e4501e0f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const init = () => {
  viewTemplate(window.location.hash);
  window.addEventListener('hashchange', () => viewTemplate(window.location.hash));
};

window.addEventListener('load', init);
