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
      alert('Post agregado'); // poner en la pantalla el mensaje success
    }).catch((error) => {
      console.log('error al añadir post', error); // poner en la pantalla el mensaje fail
    });
};

// Esta funcion no funciona correctamente::D
/* export const edit = (Id, id) => {
  const idDoc = `${Id}`;
  const uid = `${id}`;
  const textPost = document.querySelector(`#${Id}`);
  textPost.disabled = false;

  const btnSaveEdit = document.querySelector('#edit-post');
  btnSaveEdit.classList.remove('hide');

  const textArea = document.querySelector(`#${Id}`);

  textArea.addEventListener('focus', () => {
    console.log(textArea.value);
    btnSaveEdit.addEventListener('click', () => {
      console.log(textArea.value);
      editData(idDoc, uid, textArea.value);
      btnSaveEdit.classList.add('hide');
    });
  });
}; */
