/* eslint-disable no-alert */
/* eslint-disable no-console */
// jejejegr
import { currentUser } from '../model/firebase-auth.js';
import { addPost } from '../model/firebase-db.js';

// guardar en un array la data para agregar la propiedad id en el objeto--para llamar en la ruta
export const getPosts = (dataPost) => {
  const user = currentUser();
  firebase.firestore().collection('users').doc(user.uid).collection('post')
    .onSnapshot((querySnapshot) => {
      // const data = [];
      console.log('hola');
      querySnapshot.forEach((doc) => {
        dataPost({ id: doc.id, ...doc.data() });
      });
    });
};

// agregar un post en la bd
export const functionSharePost = (event) => {
  event.preventDefault();
  const textPost = document.getElementById('text-post').value;
  const mode = document.getElementById('mode').value;
  const user = currentUser();
  console.log(user);
  const countLike = 0;
  addPost(textPost, user.uid, user.displayName, mode, countLike)
    .then(() => {
      document.getElementById('text-post').value = '';
      alert('Post agregado');// poner en la pantalla el mensaje sucess
    }).catch((error) => {
      console.log('error al añadir post', error);// poner en la pantalla el mensaje fail
    });
};

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
