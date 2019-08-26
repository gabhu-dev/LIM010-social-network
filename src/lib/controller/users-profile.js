// CONTROLANDO LA DATA-users
// agrega una coleccion 'users' al que le añade el nombre,email,id(autenticacion)
export const createUser = (nombre, email, id, photo) => {
  const addUserCollection = firebase.firestore().collection('users').doc(id).set({
    Usuario: nombre,
    Correo: email,
    Id: id,
    Photo: photo,
  });
  return addUserCollection;
};
/* eslint-disable no-console */
export const obtainProfile = (id) => {
  firebase.firestore().collection('users').doc(id).get()
    .then((doc) => {
      if (doc.exists) {
        const userInfo = document.getElementById('user-info');
        const img = document.getElementById('img-profile');
        userInfo.innerHTML = `<p class="">${doc.data().Usuario}</p>`;
        userInfo.innerHTML += `<p class="">${doc.data().Correo}</p>`;
        img.innerHTML += `<div>${doc.data().Photo}</div>`;
        console.log('Document data:', doc);
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
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
