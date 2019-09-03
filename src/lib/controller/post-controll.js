/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-alert */

import { currentUser } from '../model/firebase-auth.js';
import { addPost } from '../model/firebase-db.js';

// Agrega un post en la bd
export const addData = (event) => {
  event.preventDefault();
  const textPost = document.getElementById('text-post').value;
  const mode = document.getElementById('mode').value;
  const user = currentUser();
  let countLike = 0;
  addPost(textPost, user.uid, user.displayName, user.email, mode, countLike)
    .then(() => {
      document.getElementById('text-post').value = '';
      alert('Su post se agregó!!!'); // poner en la pantalla el mensaje exitoso.
    }).catch((error) => {
      console.log('error al añadir post', error); // poner en la pantalla el mensaje.
    });
};
