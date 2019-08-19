export const savePost = (textPost) => {
  const addPost = firebase.firestore().collection('posts').add({
    title: textPost,
    state: false,
  });
  return addPost;
};
