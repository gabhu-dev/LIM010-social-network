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
