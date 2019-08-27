// aqui se JUNTAN -----------------
import { saveInData, deleteData, readData } from './post-data.js';
import { currentUser } from '../model/firebase-auth.js';

export const save = (e) => {
  e.preventDefault();
  const textPost = document.getElementById('text-post').value;
  const user = currentUser();
  saveInData(textPost, user.uid);
};
export const deleteNoteOnClick = (post) => {
  deleteData(post.id);
};

const postItem = (postObject) => {
  const divPostItem = document.createElement('div');
  divPostItem.innerHTML = `<span>${postObject.data().post} </span>
  <button id="delete-${postObject.id}">borrar</button>
 `;
  // agregando evento de click al btn eliminar una nota
  divPostItem.querySelector(`#delete-${postObject.id}`)
    .addEventListener('click', () => deleteData(currentUser().uid, postObject.id));
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
      // const btnDelete = postUp.querySelector('#delete-${doc.id}');
      // postUp.querySelector(`#delete-${doc.id}`).addEventListener('click', () => console.log('diste click'));
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

// eliminar post
// const deleteIdPosts=(e)=>{
// e.preventDefault();
// const user = currentUser();
//   deleteData(user.uid,)
// }
// leer post
// export const showPost = () => {
//   const tabla = document.getElementById('show-post');
//   firebase.firestore().collection('Post').onSnapshot((querySnapshot) => {
//     tabla.innerHTML = '';
//     querySnapshot.forEach((doc) => {
//       tabla.innerHTML += `<label class="flex-c post-label bg-color-pink">
//                             <div class="post flex-c c-darkblue">${doc.data().Post}</div>
//                             <button type="button" id="${doc.id}">X</button>
//                             <button type="button" id="${doc.id}">Editar</button>
//                             <p>${doc.data().Status}</p>
//                           </label>`;
//     });
//   });
//   return tabla;
// };

// crear post
// export const addPost = () => {
//   const post = document.getElementById('text-post').value;
//   const status = document.getElementById('status').value;
//   firebase.firestore().collection('Post').add({
//     Post: post,
//     Status: status,
//     timePost: (new Date()).toLocaleDateString(),
//   })
//     .then((docRef) => {
//       eslint-disable-next-line no-console
//       console.log('Document written with ID: ', docRef.id);
//       document.getElementById('text-post').value = '';
//       showPost();
//     })
//     .catch((error) => {
//       eslint-disable-next-line no-console
//       console.error('Error adding document: ', error);
//     });
// };
