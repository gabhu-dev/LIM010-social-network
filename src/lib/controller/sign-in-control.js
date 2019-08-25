import {
  signInGoogle,
  signInEmail,
  signInFacebook,
  signOut,
  currentUser,
} from '../model/firebase-auth.js';
import { createUser } from './create-user-db-control.js';

export const signIn = (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const messageErrorLabel = document.getElementById('msg-wrong');
  return signInEmail(email, password)
    .then(() => {
      // const b = currentUser();
      // const c = b.uid;
      // console.log(c);
      messageErrorLabel.classList.remove('error');
      messageErrorLabel.innerHTML = '';
      window.location.hash = '#/home';
    })
    .catch((error) => {
      messageErrorLabel.classList.add('error');
      switch (error.code) {
        case 'auth/user-not-found':
          messageErrorLabel.innerHTML = 'Usuario no registrado';
          break;
        case 'auth/wrong-password':
          messageErrorLabel.innerHTML = 'Contraseña incorrecta';
          break;
        case 'auth/invalid-email':
          messageErrorLabel.innerHTML = 'No se ingresó ningún correo electrónico';
          break;
        default:
          messageErrorLabel.innerHTML = 'Se ha producido un error';
      }
    });
};

export const signInFb = () => {
  signInFacebook()
    .then(() => {
      window.location.hash = '#/home';
    }).catch((error) => {
      // Manejar errores aquí.
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        // console.log('es el mismo usuario');
      }
    });
};

export const signInGoogleV = () => {
  signInGoogle()
    .then(() => {
      const a = currentUser();
      createUser(a.displayName, a.email, a.uid);
      window.location.hash = '#/home';
    }).catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        // console.log('es el mismo usuario');
      }
    });
};

export const logOut = (e) => {
  e.preventDefault();
  signOut()
    .then(() => {
      window.location.hash = '#/signin';
    });
};
