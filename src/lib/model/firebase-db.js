/* eslint-disable no-console */
/* eslint-disable max-len */

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
  .delete()
  .then(() => {
    console.log('Document successfully deleted!');
  })
  .catch((error) => {
    console.error('Error removing document: ', error);
  });

// Edita el post
export const editPost = (idDocPost, textPost) => firebase.firestore().collection('posts')
  .doc(idDocPost)
  .update({
    post: textPost,
  })
  .then(() => {
    console.log('Document successfully updated!');
  })
  .catch((error) => {
    console.error('Error updating document: ', error);
  });


// Actualiza los likes
export const editLikes = (idD, like) => firebase.firestore().collection('posts').doc(idD).update({
  likes: like,
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
  .delete()
  .then(() => {
    console.log('Comentario eliminado!');
  })
  .catch((error) => {
    console.error('No se pudo eliminar el comentario: ', error);
  });

// Edita los comentarios
export const editComment = (idPost, idUser, newTextComment) => firebase.firestore().collection('posts').doc(idPost).collection('comments')
  .doc(idUser)
  .update({
    comment: newTextComment,
  });

// Llama  los comentarios
export const readComments = (idPost, callback) => {
  firebase.firestore().collection('posts').doc(idPost).collection('comments')
    .orderBy('timeComment', 'desc')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
        // console.log(data);
      });
      callback(data);
    });
};

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
