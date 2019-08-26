// aqui se JUNTAN -----------------
import { saveInData, readData, deleteData } from './post-data.js';
import { currentUser } from '../model/firebase-auth.js';

export const save = (e) => {
  e.preventDefault();
  const textPost = document.getElementById('text-post').value;
  const user = currentUser();
  saveInData(textPost, user.uid);
};

export const readPost = (e) => {
  e.preventDefault();
  const user = currentUser();
  const postUp = document.getElementById('post-up');
  postUp.innerHTML = '';
  readData(user.uid)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // eslint-disable-next-line no-console
        console.log(`${doc.id} => ${doc.data()}`);
        postUp.innerHTML += `
          <div id="post-up" class="bg-color-pink w-h-max post-label flex-c c-darkblue">
          <td>${doc.data().post}</td>
          <button id="delete">borrar</button>
          </div>
        `;
        const btnDelete = document.getElementById('delete');
        btnDelete.addEventListener('click', () => {
          deleteData(user.uid, doc.id);
        });
      });
    });
};

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

// eliminar
// const deletePost = (id) => {
//   firebase.firestore().collection('Post').doc(id).delete()
//     .then(() => {
//       console.log('Document successfully deleted!');
//     })
//     .catch((error) => {
//       console.error('Error removing document: ', error);
//     });
// };

// export const update = (e) => {
//   e.preventDefault();
//   const postUp = document.getElementById('post-up');
//   postUp.innerHTML = '';
//   firebase.firestore().collection('post').get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       eslint-disable-next-line no-console
//       console.log(`${doc.id} => ${doc.data()}`);
//       postUp.innerHTML += `
//        <div id="post-up" class="bg-color-pink w-h-max post-label flex-c c-darkblue">
//         <td>${doc.data().Post}</td>
//        </div>
//       `;
//     });
//   });
// };
// export const signOutUser = () => {
//   signOutLogin().then(() => {
//     window.location.hash = '#/';
//   }, () => {
//     // console.log(error);
//   });
// };
// export const changeViewToProfile = () => {
//   window.location.hash = '#/profile';
// };
// export const changeViewToMyPosts = () => {
//   window.location.hash = '#/myPost';
// };
