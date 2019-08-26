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
