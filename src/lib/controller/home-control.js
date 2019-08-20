import { savePost } from './post.js';
// userCollection
// export const saveEmail = (e) => {
//   e.preventDefault();
//   const emailUser = document.getElementById('email').value;
//   return userCollection(emailUser)
//     .then(() => {
//       // eslint-disable-next-line no-console
//       console.log('se añadio correctamente');
//     });
// };

export const addPost = (e) => {
  e.preventDefault();
  const post = document.getElementById('text-post').value;
  return savePost(post)
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('se añadio correctamente');
    });
};
export const update = (e) => {
  e.preventDefault();
  const postUp = document.getElementById('post-up');
  postUp.innerHTML = '';
  firebase.firestore().collection('usuarios').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      postUp.innerHTML += ` ${doc.data().title}`;
    });
  });
};
