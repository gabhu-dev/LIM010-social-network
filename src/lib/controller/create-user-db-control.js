export const createUser = (nombre, email, id) => {
  const addUserCollection = firebase.firestore().collection('users').doc(id).set({
    Usuario: nombre,
    Correo: email,
    Id: id,
    // Photo: img,
  });
  return addUserCollection;
};
