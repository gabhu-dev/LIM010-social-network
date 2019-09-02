// import { currentUser } from '../model/firebase-auth.js';
// import { deleteComment, editComment } from '../model/firebase-db.js';

export const viewComment = (objComment) => {
  const commentContainer = document.createElement('div');
  commentContainer.innerHTML = '';
  const commentTemplate = `  
    <div class="">
      <p class="" id="nombre">${objComment.email}</p>
      <p class=""><i class="clock-icon fa fa-clock-o" aria-hidden="true"></i> ${objComment.timeComment}</p>
    </div>
    <div class="">
      <textarea id="comment" class="" type="text">${objComment.coment}</textarea>
      <div class="">
        <i id="btn-delete-comentario" class="" aria-hidden="true"></i>
        <i id="edit-coment" class="" aria-hidden="true"></i>
        <i id="save" class="" aria-hidden="true"></i>
      </div>
    </div>
    `;
  commentContainer.innerHTML = commentTemplate;
  commentContainer.setAttribute('class', 'bg-color-blue');
  // commentContainer.classList.add('container-comment');
  //   const eliminar = commentContainer.querySelector('#btn-delete-comentario');
  //   const textArea = commentContainer.querySelector('#comment');
  //   const edit = commentContainer.querySelector('#edit-coment');
  //   const save = commentContainer.querySelector('#save');
  //   if (currentUser().email !== objComment.idUsuario) {
  //     eliminar.classList.add('hide');
  //     edit.classList.add('hide');
  //     textArea.disabled = true;
  //   } else {
  //     textArea.disabled = true;
  //     eliminar.addEventListener('click', () => {
  //       deleteComment(objComment.idPost, objComment.id);
  //     });
  //     if (currentUser().email !== objComment.correo) {
  //       edit.classList.add('hide');
  //     } else {
  //       edit.classList.remove('hide');
  //       edit.addEventListener('click', () => {
  //         save.classList.remove('hide');
  //         edit.classList.add('hide');
  //         textArea.disabled = false;
  //         textArea.select();
  //       });
  //       save.addEventListener('click', () => {
  //         editComment(objComment.idPost, objComment.id, textArea.value);
  //         edit.classList.remove('hide');
  //         save.classList.add('hide');
  //         textArea.disabled = true;
  //       });
  //     }
  //   }
  return commentContainer;
};
