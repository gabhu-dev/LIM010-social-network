import { obtainCollectionUsers } from '../model/firebase-db.js';

/* eslint-disable no-console */
// Agrega una coleccion 'users' al que le añade el nombre,email,id(autenticacion)
// falta testear y ponerlo en model


export const obtainProfile = (id) => {
  obtainCollectionUsers(id)
    .then((doc) => {
      if (doc.exists) {
        const userInfo = document.getElementById('user-info');
        const userName = document.getElementById('user-name');
        const img = document.getElementById('img-profile');
        userInfo.innerHTML = `<p class="">${doc.data().Usuario}</p>`;
        userInfo.innerHTML += `<p class="">${doc.data().Correo}</p>`;
        img.innerHTML = `<img src="${doc.data().Photo}" class="img-profile" alt="foto de perfil de ${doc.data().Usuario}">`;
        userName.innerHTML = doc.data().Usuario;
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};
