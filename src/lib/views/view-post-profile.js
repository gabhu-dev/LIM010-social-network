import { deleteData, editData } from '../controller/post-controll.js';
import { currentUser } from '../model/firebase-auth.js';

export const listPosts = (data) => {
  const f = new Date(data.timePost.toDate());
  const day = f.getDate();
  const month = f.getMonth() + 1;
  const year = f.getFullYear();
  const hour = f.getHours();
  const minute = f.getMinutes();
  const divPostItem = document.createElement('div');
  const template = `
    <label id="label-publicate" class="flex-c just-cont-sb">
      <p class="name-person">Publicado por ${data.user}</p>
      <textarea id="${data.Id}" class="post c-darkblue" disabled>${data.post}</textarea>
      <button type="button" class="hide" id="edit-post">Guardar</button>
      <div class="flex-r m-auto">
        <p class="m-info">${data.privacity}</p>
        <p class="m-info">${day}${'/'}${month}${'/'}${year}</p>
        <p class="m-info">${hour}${':'}${minute}</p>
      </div>
    </label>  
      <div class="options-like-deleted">
        <button id="like-${data.id}" class="btn-share"><i class='bx bx-heart cursor'></i></button>
        <button id="edit-${data.id}" class="btn-share"><i class='bx bx-edit cursor'>Editar</i></button>
        <button id="delete-${data.Id}" class="btn-share cursor">Eliminar</button>
      </div>`;
  divPostItem.innerHTML = template;
  divPostItem.setAttribute('class', 'flex-c  bg-color-blue post-label w-80');
  // Elimina un post
  const btnDelete = divPostItem.querySelector(`#delete-${data.Id}`);
  btnDelete.addEventListener('click', () => deleteData(currentUser().uid, data.id));
  // Editar un post
  const btnEdit = divPostItem.querySelector(`#edit-${data.id}`);
  // btnEdit.addEventListener('click', () => edit(data.Id, data.id)); // de la funcion que no funciona correctamente

  btnEdit.addEventListener('click', () => {
    const idoc = `${data.Id}`;
    const uid = `${data.id}`;
    divPostItem.querySelector(`#${data.Id}`).disabled = false;
    const btnSaveEdit = divPostItem.querySelector('#edit-post');
    btnSaveEdit.classList.remove('hide');
    const textArea = divPostItem.querySelector(`#${data.Id}`);
    textArea.addEventListener('focus', () => {
      console.log(textArea.value);
      btnSaveEdit.addEventListener('click', () => {
        console.log(textArea.value);
        editData(idoc, uid, textArea.value);
        btnSaveEdit.classList.add('hide');
      });
    });
  });

  return divPostItem;
};
// no olvidarse de cambiar el nombre de list post, el argumento por postobject
