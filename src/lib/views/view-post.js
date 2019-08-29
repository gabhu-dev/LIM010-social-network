import { deleteData, editData } from '../controller/post-controll.js';
import { currentUser } from '../model/firebase-auth.js';

// cambiar el p donde se muestra el posts

export const listPosts = (data) => {
  const f = new Date(data.timePost.toDate());
  const day = f.getDate();
  const month = f.getMonth() + 1;
  const year = f.getFullYear();
  const hour = f.getHours();
  const minute = f.getMinutes();
  const divPostItem = document.createElement('div');
  const template = `
    <label id="label-publicate" class="flex-c post-publicated just-cont-sb bg-color-pink">
      <p class="name-person">Publicado por ${data.user}</p>
      <p>${day}${'/'}${month}${'/'}${year}</p>
      <p>${hour}${':'}${minute}</p>
      <textarea id="${data.Id}" disabled>${data.post}</textarea>
      <button type="button" class="hide" id="edit-post">Guardar</button>
      <p>${data.privacity}</p>
      <div class="options-like-deleted">
        <button id="like-${data.id}"><i class='bx bx-heart cursor'></i></button>
        <button id="edit-${data.id}"><i class='bx bx-edit cursor'>Editar</i></button>
      </div>
    </label>
    <button id="delete-${data.Id}" class="btn-save cursor">Eliminar</button>`;
  divPostItem.innerHTML = template;
  // Elimina un post
  const btnDelete = divPostItem.querySelector(`#delete-${data.Id}`);
  btnDelete.addEventListener('click', () => deleteData(currentUser().uid, data.id));
  // Editar un post
  const btnEdit = divPostItem.querySelector(`#edit-${data.id}`);
  btnEdit.addEventListener('click', () => {
    const idoc = `${data.Id}`;
    const uid = `${data.id}`;
    // const posts = `${data.post}`;
    divPostItem.getElementById(`#${data.Id}`).disabled = false;

    const btnSaveEdit = document.getElementById('edit-post');
    btnSaveEdit.classList.remove('hide');

    const prueba = document.getElementById(`${data.Id}`);
    prueba.addEventListener('focus', () => {
      console.log(prueba.value);
      btnSaveEdit.addEventListener('click', () => {
        console.log(prueba.value);
        editData(idoc, uid, prueba.value);
        btnSaveEdit.classList.add('hide');
      });
    });
  });

  return divPostItem;
};
// no olvidarse de cambiar el nombre de list post  el argumento por postobject
