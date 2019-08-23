// export const savePost = (textPost) => {
//   const addPost = firebase.firestore().collection('posts').add({
//     title: textPost,
//     state: false,
//   });
//   return addPost;
// };

export const createUser = () => {
  const nickname = document.getElementById('nickname').value;
  const email = document.getElementById('email-signup').value;
  const addUserCollection = firebase.firestore().collection('users-gb').add({
    Usuario: nickname,
    Correo: email,
  });
  return addUserCollection;
};
const subPost = () => {
  const messageRef = firebase.firestore().collection('users-gb').doc('${doc.id}')
    .collection('post')
.doc('publico');
};
// leer la data de la base de datos
// export const readPost = () => {
//   const upPost = firebase.firestore().collection('users').get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
//   });
//   return upPost;
// };
