/* eslint-disable no-console */
/* eslint-disable no-alert */
import { currentUser } from '../model/firebase-auth.js';
import { addPost, addPostPublic } from '../model/firebase-db.js';

// // guardar en un array la data para agregar la propiedad id en el objeto--para llamar en la ruta
// export const getPosts = (dataPost) => {
//   const user = currentUser();
//   firebase.firestore().collection('post-public')
//     .onSnapshot((querySnapshot) => {
//       // const data = [];
//       console.log('hola');
//       querySnapshot.forEach((doc) => {
//         dataPost({ id: doc.id, ...doc.data() });
//       });
//     });
// };//Borrrar urgente

// // guardar en un array la data para agregar la propiedad id en el objeto--para llamar en la ruta
// export const getPosts = (dataPost) => {
//   const user = currentUser();
//   firebase.firestore().collection('users').doc(user.uid).collection('post')
//     .onSnapshot((querySnapshot) => {
//       // const data = [];
//       console.log('hola');
//       querySnapshot.forEach((doc) => {
//         dataPost({ id: doc.id, ...doc.data() });
//       });
//     });
// };

// agregar un post en la bd
export const addData = (event) => {
  event.preventDefault();
  const textPost = document.getElementById('text-post').value;
  const mode = document.getElementById('mode').value;
  // const alertMsg = document.getElementById('alert-msg');
  const user = currentUser();
  const countLike = 0;
  if (mode === 'Público') {
    addPostPublic(textPost, user.uid, user.displayName, mode)
      .then(() => {
        document.getElementById('text-post').value = '';
        alert('Post agregado'); // poner en la pantalla el mensaje success
      }).catch((error) => {
        console.log('error al añadir post', error); // poner en la pantalla el mensaje fail
      });
  } else {
    addPost(textPost, user.uid, user.displayName, mode, countLike)
      .then(() => {
        document.getElementById('text-post').value = '';
        alert('Post agregado'); // poner en la pantalla el mensaje success
      }).catch((error) => {
        console.log('error al añadir post', error); // poner en la pantalla el mensaje fail
      });
  }
};

// Eliminar el post en bd
export const deleteData = (idDocUsers, idDocPost) => {
  const deletePost = firebase.firestore().collection('users').doc(idDocUsers).collection('post')
    .doc(idDocPost)
    .delete()
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Error removing document: ', error);
    });
  return deletePost;
};

// Editar el post
export const editData = (idDocUsers, idDocPost, textPost) => {
  const updateData = firebase.firestore().collection('users').doc(idDocUsers).collection('post')
    .doc(idDocPost);
  return updateData.update({
    post: textPost,
  })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
};

// Esta funcion no funciona correctamente::D
/* export const edit = (Id, id) => {
  const idDoc = `${Id}`;
  const uid = `${id}`;
  const textPost = document.querySelector(`#${Id}`);
  textPost.disabled = false;

  const btnSaveEdit = document.querySelector('#edit-post');
  btnSaveEdit.classList.remove('hide');

  const textArea = document.querySelector(`#${Id}`);

  textArea.addEventListener('focus', () => {
    console.log(textArea.value);
    btnSaveEdit.addEventListener('click', () => {
      console.log(textArea.value);
      editData(idDoc, uid, textArea.value);
      btnSaveEdit.classList.add('hide');
    });
  });
}; */
