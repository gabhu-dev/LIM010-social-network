/* eslint-disable no-alert */
/* eslint-disable no-console */
import { currentUser } from '../model/firebase-auth.js';
import { addPost } from '../model/firebase-db.js';

// guardar en un array la data para agregar la propiedad id en el objeto--para llamar en la ruta
export const getPosts = (dataPost) => {
  firebase.firestore().collection('users')// .doc(bEEN9XL3z8dPy7gxL2hlcmgKQX23).collection('post')
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
  const countLike = 0;
  addPost(textPost, user.uid, mode, countLike)
    .then(() => {
      document.getElementById('text-post').value = '';
      alert('Post agregado');// poner en la pantalla el mensaje sucess
    }).catch((error) => {
      console.log('error al añadir post', error);// poner en la pantalla el mensaje fail
    });
};
