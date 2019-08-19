export const addPost = (textPost) => {
  const adPost = firebase.firestore().collection('posts').add({
    title: textPost,
    state: false,
  });
  return adPost;
};
