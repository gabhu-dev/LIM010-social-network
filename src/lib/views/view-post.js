/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable max-len */

import { currentUser } from '../model/firebase-auth.js';
import { deletePost, editPost, addComment, readComments } from '../model/firebase-db.js';
import { viewComment } from './view-comment.js';

export const listPosts = (data) => {
  const time = new Date(data.timePost.toDate());
  const divPostItem = document.createElement('div');
  let template = '';
  if (data.privacity === 'Público' || data.user === currentUser().displayName) {
    template = `
  <label id="label-publicate" class="flex-c just-cont-sb">
    <p class="name-person bg-color-pink">Publicado por <strong>${data.email}</strong></p>
    <div class="flex-r date bg-color-pink">
      <p class="m-info">el    ${time.getDate()}${'/'}${time.getMonth() + 1}${'/'}${time.getFullYear()}</p>
      <p class="m-info">a las   ${time.getHours()}${':'}${time.getMinutes()}</p>
      <p class="m-info"><strong>${data.privacity}</strong></p>
    </div>
    <textarea id="text-post" class="post-publicated c-darkblue" disabled>${data.post}</textarea>
    <select class="hide" id="select-mode">
      <option value="Público">Público</option>
      <option value="Privado">Privado</option>
    </select> 
  </label>  
  <div class="options-like-deleted flex-r">
    <button id="like-${data.id}" class="btn-share"><i class='bx bx-heart cursor'></i></button>
    <p id="counter-like"></p> 
    <button id="edit-${data.id}" class="btn-share"><i class='bx bx-edit cursor'>Editar</i></button>
    <button type="button" class="hide cursor  btn-share" id="edit-post">Guardar Edición</button>
    <button id="delete-${data.id}" class="btn-share cursor">Eliminar</button>
  </div>
  <div id="textarea-comment" class="bg-color-darkblue shad  br-1 m-bott-1">
    <textarea id="new-comment" class="post c-darkblue" type="text" placeholder="Escribe tu comentario" /></textarea>
    <button type="button" id="btn-comment" class="btn-share cursor bg-color-pink m-bott-1">Comentar</button>
  </div>
  <p class="m-auto pad-1">Comentarios: </p>
  <div id="comments-container" class=""></<div>`;

    divPostItem.innerHTML = template;
    divPostItem.setAttribute('class', 'flex-c  bg-color-blue post-label w-80 shadow');

    const btnDelete = divPostItem.querySelector(`#delete-${data.id}`);
    const btnEdit = divPostItem.querySelector(`#edit-${data.id}`);
    const btnComment = divPostItem.querySelector('#btn-comment');
    const comments = divPostItem.querySelector('#comments-container');
    const modeEdit = divPostItem.querySelector('#select-mode');
    const btnSaveEdit = divPostItem.querySelector('#edit-post');
    const textArea = divPostItem.querySelector('#text-post');

    if (data.idUser !== currentUser().uid) {
      btnDelete.classList.add('hide');
      btnEdit.classList.add('hide');
    } else {
      btnDelete.addEventListener('click', () => deletePost(`${data.id}`));

      btnEdit.addEventListener('click', () => {
        btnEdit.classList.add('hide');
        btnSaveEdit.classList.remove('hide');
        modeEdit.classList.remove('hide');
        textArea.disabled = false;
        textArea.select();
      });

      btnSaveEdit.addEventListener('click', () => {
        editPost(`${data.id}`, textArea.value, modeEdit.value);
      });
    }

    btnComment.addEventListener('click', () => {
      const comment = divPostItem.querySelector('#new-comment').value;
      addComment(comment, currentUser().email, `${data.id}`, currentUser().uid);
    });

    readComments(`${data.id}`, (dato) => {
      comments.innerHTML = '';
      dato.forEach(obj => comments.appendChild(viewComment(obj)));
    });
  }
  return divPostItem;
};
