// controlando la DATA-POST
// creando una coleccion 'post' donde se añade lo que escriba el usuario

// import { userCollection } from '../../main.js';

export const saveInData = (textPost, id) => {
  const messageRef = firebase.firestore().collection('users').doc(id)
    .collection('post')
    .add({
      post: textPost,
      state: false,
    });
  return messageRef;
};

// export const getData = (callback, id) => {
//   const getPost = firebase.firestore().collection('users').doc(id).collection('post')
//     .onSnapshot((querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() });
//       });
//       callback(data);
//     }) ;
//   return getPost;
// };
// creo que es xq cambiaste esto a read data
export const readData = id => firebase.firestore().collection('users').doc(id).collection('post');

export const deleteData = (idDocUsers, idDocPost) => {
  console.log('... Borrando Post');
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
