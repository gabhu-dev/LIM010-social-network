// variable general de firestore7
// const firestore = firebase.firestore();
// creando la coleccion users
export const userCollection = (emailUser) => {
  const users = firebase.firestore().collection('usuarios').set({
    title: emailUser,
  });
  return users;
};

export const savePost = (textPost) => {
  const addPost = firebase.firestore().collection('posts').add({
    title: textPost,
    state: false,
  });
  return addPost;
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
