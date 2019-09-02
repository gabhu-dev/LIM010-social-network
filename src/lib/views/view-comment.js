import { currentUser } from '../model/firebase-auth.js';
import { deleteComment, editComment } from '../model/firebase-db.js';

export const viewComment = (obj) => {
  const time = new Date(obj.timeComment.toDate());
  const divCommentItem = document.createElement('div');
  divCommentItem.innerHTML = '';
  const template = `  
  <p class="" id="nombre">Comentado por ${obj.email}</p>
  <p class="m-info">el ${time.getDate()}${'/'}${time.getMonth() + 1}${'/'}${time.getFullYear()}</p>
  <p class="m-info">a las ${time.getHours()}${':'}${time.getMinutes()}</p>
  <textarea id="comment" class="post c-darkblue" type="text" disabled>${obj.comment}</textarea>
    <div class="">
      <button type="button" id="btn-delete-comment" class="btn-share">Eliminar</button>
      <button type="button" id="btn-edit-comment" class="btn-share">Editar</button>
      <button type="button" id="btn-save-comment" class="hide btn-share">Guardar Edición</button>
    </div>`;

  divCommentItem.innerHTML = template;

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

  //   if (currentUser().uid !== obj.idUser) {
  //     btnEditComment.classList.add('hide');
  //   } else {
  //     btnEditComment.classList.remove('hide');
  //     btnEditComment.addEventListener('click', () => {
  //       btnSaveComment.classList.remove('hide');
  //       btnEditComment.classList.add('hide');
  //       textArea.disabled = false;
  //       textArea.select();
  //     });
  //     btnSaveComment.addEventListener('click', () => {
  //       editComment(obj.idPost, obj.idUser, textArea.value);
  //       btnEditComment.classList.remove('hide');
  //       btnSaveComment.classList.add('hide');
  //     });
  //   }
  // }
  return divCommentItem;
};
