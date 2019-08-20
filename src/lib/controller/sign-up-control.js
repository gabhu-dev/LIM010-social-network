/* eslint-disable no-console */
import { signUpWithEmail } from './ingresar.js';
import { createUser } from './post.js';

export const signUp = (e) => {
  e.preventDefault();
  // const nickname = document.getElementById('nickname').value;
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;
  const messageErrorLabel = document.getElementById('msg-warning');
  signUpWithEmail(email, password)
    .then(() => {
      messageErrorLabel.classList.remove('error');
      messageErrorLabel.innerHTML = '';
      const user = firebase.auth().currentUser;
      console.log(user);
      window.location.hash = '#/';
      createUser();
    })
    .catch((error) => {
      messageErrorLabel.classList.add('error');
      switch (error.code) {
        case 'auth/email-already-in-use':
          messageErrorLabel.innerHTML = '¡La dirección de correo electrónico ya existe!';
          break;
        case 'auth/weak-password':
          messageErrorLabel.innerHTML = 'La contraseña debe tener 6 o más caracteres';
          break;
        case 'auth/invalid-email':
          messageErrorLabel.innerHTML = 'No se escribió correo electrónico válido';
          break;
        default:
          messageErrorLabel.innerHTML = 'Se ha producido un error';
      }
    });
};
