/* eslint-disable max-len */
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

// Post privado
export const addPost = (textPost, id, name, mail, mode) => {
  const messageRef = firebase.firestore().collection('posts')
    .add({
      post: textPost,
      idUser: id,
      user: name,
      email: mail,
      privacity: mode,
      like: 0,
      timePost: new Date(),
    });
  return messageRef;
};
// Añadir comentarios
export const addComment = (textComment, mail, idDoc, id) => firebase.firestore().collection('posts').doc(idDoc).collection('comments')
  .add({
    comment: textComment,
    email: mail,
    idPost: idDoc,
    idUser: id,
    timeComment: new Date(),
  });

export const readComments = (idPost, callback) => {
  firebase.firestore().collection('posts').doc(idPost).collection('comments')
    .orderBy('time', 'desc')
    .onSnapshot((datos) => {
      const data = [];
      datos.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
        // console.log(data);
      });
      callback(data);
    });
};

// export const deleteComment = (idD, id) => firebase.firestore().collection('posts').doc(idD).collection('comments')
//   .doc(id)
//   .delete();
// export const editComment = (idD, id, newText) => firebase.firestore().collection('posts').doc(idD).collection('comments')
//   .doc(id)
//   .update({
//     comentario: newText,
//   });


// para añadir imagenes
// export const upImgs = (file, uid) => {
//   const refStorage = firebase.storage().ref(`imgsPosts/${uid}/${file.name}`);
//   const task = refStorage.put(file);
//   task.on('state_changed',
//     (Snapshot) => {
//       const porcentaje = Snapshot.bytesTransferred / Snapshot.totalBytes * 100 $('.determinate').attr('style', `with:${porcentaje}%`);
//     },
//     (err) => {
//       console.log(`error subiendo = >${err.message}`, 4000);
//     },
//     () => {
//       task.Snapshot.ref.getDownloadURL()
//         .then((url) => {
//           console.log(url);
//           sessionStorage.setItem('imgNewPost', url);
//         }).catch(err => console.log(err));
//     });
//
// subir img a storage
// const upImgs
