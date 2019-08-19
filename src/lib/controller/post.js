export const addPost = (textPost) => {
  firebase.firestore().collection('posts').add({
    title: textPost,
    state: false,
  });
};
