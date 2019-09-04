// coleccion user
export const createUser = (nombre, email, id, photo) => {
  const addUserCollection = firebase.firestore().collection('users').doc(id).set({
    Usuario: nombre,
    Correo: email,
    Id: id,
    Photo: photo,
  });
  return addUserCollection;
};
export const obtainCollectionUsers = (id) => {
  const get = firebase.firestore().collection('users').doc(id).get();
  return get;
};
// Agrega un post
export const addPost = (textPost, id, name, mail, mode, like) => firebase.firestore().collection('posts')
  .add({
    post: textPost,
    idUser: id,
    user: name,
    email: mail,
    privacity: mode,
    likes: like,
    timePost: new Date(),
  });

// Elimina un post
export const deletePost = idDocPost => firebase.firestore().collection('posts')
  .doc(idDocPost)
  .delete();

// Edita el post
export const editPost = (idDocPost, textPost, mode) => firebase.firestore().collection('posts')
  .doc(idDocPost)
  .update({
    post: textPost,
    privacity: mode,
    timePost: new Date(),
  });

// Llama los posts se usa en router
export const getPost = (callback) => {
  firebase.firestore().collection('posts')
    .orderBy('timePost', 'desc')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      callback(data);
    });
};

// Agrega comentarios
export const addComment = (textComment, mail, idDoc, id) => firebase.firestore().collection('posts').doc(idDoc).collection('comments')
  .add({
    comment: textComment,
    email: mail,
    idPost: idDoc,
    idUser: id,
    timeComment: new Date(),
  });

// Elimina los comentarios
export const deleteComment = (idD, id) => firebase.firestore().collection('posts').doc(idD).collection('comments')
  .doc(id)
  .delete();
// Edita los comentarios
export const editComment = (idPost, idComment, textComment) => firebase.firestore().collection('posts').doc(idPost).collection('comments')
  .doc(idComment)
  .update({
    comment: textComment,
  });

// Llama  los comentarios
export const readComments = (idPost, callback) => {
  firebase.firestore().collection('posts').doc(idPost).collection('comments')
    .orderBy('timeComment', 'desc')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      callback(data);
    });
};
export const editLikes = (idD, like) => {
  firebase.firestore().collection('posts').doc(idD).update({
    likes: like,
  });
};
