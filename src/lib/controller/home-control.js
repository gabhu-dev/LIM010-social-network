// import { savePost } from './post.js';

// export const addPost = (e) => {
//   e.preventDefault();
//   const post = document.getElementById('text-post').value;
//   return savePost(post)
//     .then(() => {
//       // eslint-disable-next-line no-console
//       console.log('se añadio correctamente');
//     });
// };

export const addPost = () => {
  const post = document.getElementById('text-post').value;
  // eslint-disable-next-line no-console
  console.log(post);
  firebase.firestore().collection('post').add({
    Post: post,
    timePost: (new Date()).toLocaleDateString(),
  })
    .then((docRef) => {
      // eslint-disable-next-line no-console
      console.log('Document written with ID: ', docRef.id);
      // document.getElementById('correo').value = '';
      // document.getElementById('new-post').value = '';
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Error adding document: ', error);
    });
};
export const update = (e) => {
  e.preventDefault();
  const postUp = document.getElementById('post-up');
  postUp.innerHTML = '';
  firebase.firestore().collection('post').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // eslint-disable-next-line no-console
      console.log(`${doc.id} => ${doc.data()}`);
      postUp.innerHTML += `
       <div id="post-up" class="bg-color-pink w-h-max post-label flex-c c-darkblue">
        <td>${doc.data().Post}</td>
       </div>
      `;
    });
  });
};
