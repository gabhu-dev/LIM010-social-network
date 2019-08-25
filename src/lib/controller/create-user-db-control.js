// CONTROLANDO LA DATA
// agrega una coleccion 'users' al que le añade el nombre,email,id(autenticacion)
export const createUser = (nombre, email, id) => {
  // const addUserCollection = firebase.firestore().collection('users').doc(id).set({
    // Usuario: nombre,
    // Correo: email,
    // Id: id,
    // Photo: img,
  // });

  const addUserCollection = firebase.firestore()
    .collection('users-g').add({
      Usuario: nombre,
      Correo: email,
      Id: id,
      // Photo: img,
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    });
  return addUserCollection;
};

// creando una coleccion 'post' donde se añade lo que escriba el usuario
export const saveInData = (textPost) => {
  const messageRef = firebase.firestore().collection('users-g').doc(docRef.id)
    .collection('post')
    .add({
      post: textPost,
      state: false,
    });
  return messageRef;
};

// export const obtain = () => {
//   const user = firebase.auth().currentUser;
//   console.log(user);
// };
// export const obtainProfile = () => {
//   const user = firebase.auth().currentUser;
//   let name;
//   let email;
//   let photoUrl;
//   let uid;
//   let emailVerified;

//   if (user != null) {
//     name = user.displayName;
//     email = user.email;
//     photoUrl = user.photoURL;
//     emailVerified = user.emailVerified;
//     uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
//     // this value to authenticate with your backend server, if
//     // you have one. Use User.getToken() instead.
//   }
// };
