/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable max-len */

import { currentUser } from '../model/firebase-auth.js';
import { deletePost, editPost, addComment, readComments, editLikes } from '../model/firebase-db.js';
import { viewComment } from './view-comment.js';

export const listPosts = (data) => {
  const time = new Date(data.timePost.toDate());
  const divPostItem = document.createElement('div');
  let template = '';
  if (data.privacity === 'Público' || data.email === currentUser().email) {
    template = `
  <label id="label-publicate" class="flex-c just-cont-sb">
    <p class="name-person bg-color-pink">Publicado por <strong>${data.email}</strong></p>
    <div class="flex-r date bg-color-pink just-cont-sa">
      <p class="m-info">el    ${time.getDate()}${'/'}${time.getMonth() + 1}${'/'}${time.getFullYear()}</p>
      <p class="m-info">a las   ${time.getHours()}${':'}${time.getMinutes()}</p>
      <p class="m-info"><strong>${data.privacity}</strong></p>
    </div>
    <textarea id="text-post" class="post-publicated c-darkblue al-self-center" disabled>${data.post}</textarea>
    <select class="hide" id="select-mode">
      <option value="Público">Público</option>
      <option value="Privado">Privado</option>
    </select> 
  </label>  
  <div class="m-bott-1 flex-r just-cont-sa">
    <button id="like-${data.id}" class="btn-share bg-color-darkpink"><i id="counter-like" class='bx bx-heart cursor'>${data.likes}</i></button>
    <button id="edit-${data.id}" class="btn-share bg-color-blue"><i class='bx bx-edit cursor'>Editar</i></button>
    <button type="button" class="hide cursor  btn-share bg-color-blue" id="edit-post">Guardar Edición</button>
    <button id="delete-${data.id}" class="btn-share cursor bg-color-blue">Eliminar</button>
  </div>
  
  <div id="textarea-comment" class="bg-color-white h-6 flex-c">
    <textarea id="new-comment" class="write-comments br-1 c-darkblue al-self-center" type="text" placeholder="Escribe un comentario..." /></textarea>
    <button type="button" id="btn-comment" class="btn-share cursor bg-color-pink al-self-center">Comentar</button>
  </div>
  <div id="comments-container" class=""></<div>`;

    divPostItem.innerHTML = template;
    divPostItem.setAttribute('class', 'flex-c  bg-color-white post-label w-80 shadow');

    const btnDelete = divPostItem.querySelector(`#delete-${data.id}`);
    const btnEdit = divPostItem.querySelector(`#edit-${data.id}`);
    const btnLike = divPostItem.querySelector(`#like-${data.id}`);
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

    btnLike.addEventListener('click', () => {
      const likeValor = data.likes + 1;
      editLikes(data.id, likeValor);
    });
  }
  return divPostItem;
};
