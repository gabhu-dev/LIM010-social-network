/* eslint-disable max-len */
import { currentUser } from './firebase-auth.js';

export const getPost = (callback) => {
  const user = currentUser();
  firebase.firestore().collection('users').doc(user.uid).collection('post')
    .orderBy('timePost', 'desc')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      callback(data);
    });
};

// Post
export const addPost = (textPost, id, name, mode) => {
  const messageRef = firebase.firestore().collection('users').doc(id).collection('post')
    .add({
      post: textPost,
      Id: id,
      user: name,
      privacity: mode,
      like: 0,
      timePost: new Date(),
    });
  return messageRef;
};
// para añadir imagenes
export const upImgs = (file, uid) => {
  const refStorage = firebase.storage().ref(`imgsPosts/${uid}/${file.name}`);
  const task = refStorage.put(file);
  task.on('state_changed',
    (Snapshot) => {
      const porcentaje = Snapshot.bytesTransferred / Snapshot.totalBytes * 100 $('.determinate').attr('style', `with:${porcentaje}%`);
    },
    (err) => {
      console.log(`error subiendo = >${err.message}`, 4000);
    },
    () => {
      task.Snapshot.ref.getDownloadURL()
        .then((url) => {
          console.log(url);
          sessionStorage.setItem('imgNewPost', url);
        }).catch(err => console.log(err));
    });
};
