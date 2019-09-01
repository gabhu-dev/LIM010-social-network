/* eslint-disable max-len */
import { deleteData, editData } from '../controller/post-controll.js';
import { currentUser } from '../model/firebase-auth.js';
import { addComment, readComments } from '../model/firebase-db.js';
import { viewComment } from './view-comment.js';

export const listPosts = (data) => {
  const time = new Date(data.timePost.toDate());
  const divPostItem = document.createElement('div');
  let template = '';
  if (data.privacity === 'Público' || data.user === currentUser().displayName) {
    template = `
    <label id="label-publicate" class="flex-c just-cont-sb">
      <p class="name-person">Publicado por ${data.email}</p>
      <textarea id="text-${data.id}" class="post c-darkblue" disabled>${data.post}</textarea>
      <button type="button" class="hide" id="edit-post">Guardar</button>
      <div class="flex-r m-auto">
        <p class="m-info">${data.privacity}</p>
        <p class="m-info">${time.getDate()}${'/'}${time.getMonth() + 1}${'/'}${time.getFullYear()}</p>
        <p class="m-info">${time.getHours()}${':'}${time.getMinutes()}</p>
      </div>
    </label>  
    <div class="options-like-deleted">
      <button id="like-${data.id}" class="btn-share"><i class='bx bx-heart cursor'></i></button>
      <button id="edit-${data.id}" class="btn-share"><i class='bx bx-edit cursor'>Editar</i></button>
      <button id="delete-${data.id}" class="btn-share cursor">Eliminar</button>
    </div>
    <div id="textarea-comment" class="">
      <textarea id="new-comment" class="" type="text" placeholder="Escribe tu comentario" /></textarea>
      <button type="button" id="btn-comment">Comentar</button>
    </div>
    <div id="comments-container" class=""></<div>
      `;
    divPostItem.innerHTML = template;
    divPostItem.setAttribute('class', 'flex-c  bg-color-blue post-label w-80');

    const btnDelete = divPostItem.querySelector(`#delete-${data.id}`);
    const btnEdit = divPostItem.querySelector(`#edit-${data.id}`);

    if (data.user !== currentUser().displayName) {
      btnDelete.classList.add('hide');
      btnEdit.classList.add('hide');
    } else {
      btnDelete.addEventListener('click', () => deleteData(`${data.id}`));
      btnEdit.addEventListener('click', () => {
        divPostItem.querySelector(`#text-${data.id}`).disabled = false;
        const btnSaveEdit = divPostItem.querySelector('#edit-post');
        btnSaveEdit.classList.remove('hide');
        const textArea = divPostItem.querySelector(`#text-${data.id}`);
        textArea.addEventListener('focus', () => {
          console.log(textArea.value);
          btnSaveEdit.addEventListener('click', () => {
            console.log(textArea.value);
            editData(`${data.id}`, textArea.value);
            btnSaveEdit.classList.add('hide');
          });
        });
      });
    }
    const btnComment = divPostItem.querySelector('#btn-comment');
    btnComment.addEventListener('click', () => {
      const comment = divPostItem.querySelector('#new-comment').value;
      addComment(comment, currentUser().email, `${data.id}`, currentUser().uid)
        .then((response) => {
          divPostItem.querySelector('#new-comment').value = '';
          console.log('Se agregó a tu collección', response);
        }).catch((error) => {
          console.log('No se agregó', error);
        });
    });

    const comments = divPostItem.querySelector('#comments-container');
    readComments(`${data.id}`, (dato) => {
      comments.innerHTML = '';
      dato.forEach((obj) => {
        comments.appendChild(viewComment(obj));
      });
    });
    // btnEdit.addEventListener('click', () => edit(data.Id, data.id)); // de la funcion que no funciona correctamente
  }
  return divPostItem;
};
// no olvidarse de cambiar el nombre de list post, el argumento por postobject
