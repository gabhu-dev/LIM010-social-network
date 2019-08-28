// aqui se JUNTAN -----------------
import {
  saveInData,
  deleteData,
  readData,
  // editData,
} from './post-data.js';
import { currentUser } from '../model/firebase-auth.js';

export const save = (e) => {
  e.preventDefault();
  const textPost = document.getElementById('text-post').value;
  const user = currentUser();
  saveInData(textPost, user.uid);
};
// export const deleteNoteOnClick = (post) => {
//     deleteData(post.id);
// };

const postItem = (postObject) => {
  const divPostItem = document.createElement('div');
  divPostItem.innerHTML = `
  <label id="label-publicate" class="flex-c post-publicated just-cont-sb bg-color-pink">
  <p class="name-person">nombre<button id="delete-${postObject.id}" class="btn-save">x</button> </p>
  <span>${postObject.data().post} </span>
  

  <div class="options-like-deleted">
         <button><i class='bx bx-heart'></i></button>
         <button id="edit-${postObject.id}"><i class='bx bxl-telegram'></i></button>
       </div>
  </label>
 `;
  // agregando evento de click al btn eliminar una nota
  const btnDelete = divPostItem.querySelector(`#delete-${postObject.id}`);
  btnDelete.addEventListener('click', () => deleteData(currentUser().uid, postObject.id));
  // agregando el evento de click al btn editar nota

  const btnEdit = divPostItem.querySelector(`#edit-${postObject.id}`);
  btnEdit.addEventListener('click', () => {
    console.log('diste click');
    // texto = '';
    const texto = document.getElementById('text-post');
    const word = 'hoña';
    texto.innerHTML = word;
    // editData(currentUser().uid, postObject.id, textPost);
  });

  return divPostItem;
};

export const readPost = (e) => {
  e.preventDefault();
  const user = currentUser();
  const postUp = document.getElementById('post-up');
  readData(user.uid).onSnapshot((querySnapshot) => {
    postUp.innerHTML = '';
    querySnapshot.forEach((doc) => {
      // eslint-disable-next-line no-console
      postUp.appendChild(postItem(doc));
    });
  });
};
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         // eslint-disable-next-line no-console
//         console.log(`${doc.id} => ${doc.data()}`);
//         postUp.innerHTML += `
//           <div id="post-up" class="bg-color-pink w-h-max post-label flex-c c-darkblue">
//           <td>${doc.data().post}</td>
//           <button id="delete-${doc.id}">borrar</button>
//           </div>
//         `;
//         const btnDelete = postUp.querySelector(`#delete-${doc.id}`);
//         btnDelete.addEventListener('click', () => {
//           deleteData(user.uid, doc.id);
//         });
//       });
//     });
// };
