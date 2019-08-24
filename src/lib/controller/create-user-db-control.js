// CONTROLANDO LA DATA
// agrega una coleccion 'users' al que le añade el nombre,email,id(autenticacion)
export const createUser = (nombre, email, id) => {
  const addUserCollection = firebase.firestore().collection('users-g').add({
    Usuario: nombre,
    Correo: email,
    Id: id,
    // Photo: img,
  });
  return addUserCollection;
};

// creando una coleccion 'post' donde se añade lo que escriba el usuario
export const saveInData = (textPost) => {
  const messageRef = firebase.firestore().collection('users-g').doc('u5abO12FG2w7CidUW62S')
    .collection('post')
    .add({
      post: textPost,
      state: false,
    });
  return messageRef;
};
