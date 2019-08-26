// controlando la DATA-POST
// creando una coleccion 'post' donde se añade lo que escriba el usuario
export const saveInData = (textPost, id) => {
  const messageRef = firebase.firestore().collection('users').doc(id)
    .collection('post')
    .add({
      post: textPost,
      state: false,
    });
  return messageRef;
};

export const readData = (id) => {
  const obtainPosts = firebase.firestore().collection('users').doc(id).collection('post')
    .get();
  return obtainPosts;
};

export const deleteData = (idDocUsers, idDocPost) => {
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
