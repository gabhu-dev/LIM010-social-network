/* eslint-disable no-console */
// Agrega una coleccion 'users' al que le añade el nombre,email,id(autenticacion)
// falta testear y ponerlo en model
export const createUser = (nombre, email, id, photo) => {
  const addUserCollection = firebase.firestore().collection('users').doc(id).set({
    Usuario: nombre,
    Correo: email,
    Id: id,
    Photo: photo,
  });
  return addUserCollection;
};

export const obtainProfile = (id) => {
  firebase.firestore().collection('users').doc(id).get()
    .then((doc) => {
      if (doc.exists) {
        const userInfo = document.getElementById('user-info');
        const userName = document.getElementById('user-name');
        const img = document.getElementById('img-profile');
        userInfo.innerHTML = `<p class="">${doc.data().Usuario}</p>`;
        userInfo.innerHTML += `<p class="">${doc.data().Correo}</p>`;
        img.innerHTML = `<img src="${doc.data().Photo}" class="img-profile" alt="foto de perfil de ${doc.data().Usuario}">`;
        userName.innerHTML = doc.data().Usuario;
        // console.log('Document data:', doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};
