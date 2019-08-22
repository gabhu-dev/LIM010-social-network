export const createUser = (nombre, email, id) => {
  const addUserCollection = firebase.firestore().collection('users').add({
    Usuario: nombre,
    Correo: email,
    Id: id,
    // Photo: img,
  });
  return addUserCollection;
};

