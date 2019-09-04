import { currentUser } from '../model/firebase-auth.js';
import { deleteComment, editComment } from '../model/firebase-db.js';

export const viewComment = (obj) => {
  const time = new Date(obj.timeComment.toDate());
  const divCommentItem = document.createElement('div');
  divCommentItem.innerHTML = '';
  const template = `
  <div class="bg-color-lightpink br-1 flex-c al-self-center w-90">
  <div class="flex-r just-cont-sa">
    <p class="pad-025 c-darkblue f-size-08" id="nombre ">${obj.email}</p>
    <p class="pad-025 c-darkblue f-size-08">el ${time.getDate()}${'/'}${time.getMonth() + 1}${'/'}${time.getFullYear()}</p>
    <p class="pad-025 c-darkblue f-size-08">a las ${time.getHours()}${':'}${time.getMinutes()}</p>
  </div>
  <textarea id="comment" class="w-80 no-border pad-025 br-1 c-darkblue al-self-center bg-color-lightpink" type="text" disabled>${obj.comment}</textarea>
  </div>
  
  <div class="flex-r center-items just-cont-sa m-025">
    <button type="button" id="btn-delete-comment" class="btn-share bg-color-blue">Eliminar</button>
    <button type="button" id="btn-edit-comment" class="btn-share bg-color-blue">Editar</button>
    <button type="button" id="btn-save-comment" class="hide btn-share bg-color-darkblue">Guardar Edición</button>
  </div>`;

  divCommentItem.innerHTML = template;
  divCommentItem.setAttribute('class', 'bg-color-white m-05 h-8 flex-c');

  const textArea = divCommentItem.querySelector('#comment');
  const btnDeleteComment = divCommentItem.querySelector('#btn-delete-comment');
  const btnEditComment = divCommentItem.querySelector('#btn-edit-comment');
  const btnSaveComment = divCommentItem.querySelector('#btn-save-comment');

  if (currentUser().uid !== obj.idUser) {
    btnDeleteComment.classList.add('hide');
    btnEditComment.classList.add('hide');
  } else {
    btnDeleteComment.addEventListener('click', () => {
      deleteComment(obj.idPost, obj.id);
    });

    btnEditComment.classList.remove('hide');
    btnEditComment.addEventListener('click', () => {
      btnSaveComment.classList.remove('hide');
      btnEditComment.classList.add('hide');
      textArea.disabled = false;
      textArea.select();
    });

    btnSaveComment.addEventListener('click', () => {
      editComment(obj.idPost, obj.id, textArea.value);
      btnEditComment.classList.remove('hide');
      btnSaveComment.classList.add('hide');
    });
  }
  return divCommentItem;
};
